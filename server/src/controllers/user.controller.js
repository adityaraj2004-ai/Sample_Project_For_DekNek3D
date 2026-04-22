import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessTokensAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wront while generating the access and refresh token ")
    }
}


export const registerUser = asyncHandler(async (req, res) => {
    // get user details from the frontend 
    //  valdiation - not empty
    //  check if user already exists (using email as well as username)
    //  check for images and avatars
    // upload them to cloudinary, avatar
    //  create user object - create entryh in db  
    //  remove password and refresh token fields in from responses
    //  check for user creation
    // return res

    const { username, password, email, fullName } = req.body;


    if ([username, password, email, fullName].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    const existingUser = await User.findOne({
        $or: [{ username }, { email }] // this query checks if there is any user with the same username or email in the database. It uses the $or operator to specify that either condition can be true for a match to occur.
    })

    if (existingUser) {
        throw new ApiError(409, "user with email or username already exists")
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path; // The file path reaches req because Multer intercepts the request, processes the file, saves it, and then manually adds the file info to req.files.
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    // code to upload both the images(file) in the cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar image is required")
    }

    const user = await User.create({
        email,
        username: username.toLowerCase(),
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        fullName,
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user ")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User Registered successfully")
    )

})


export const longInUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    if (!username || !email) {
        throw new ApiError(400, "Username or email is required")
    }

    const user = await user.findOne({
        $or: [{ email }, { username }],
    })

    if (!user) {
        throw new ApiError(404, "User not found")
    }
    if (!password) {
        throw new ApiError(400, "Password is required")
    }
    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(400, "Password does not match the database")
    }

    // Password is also matched now we will make access and refresh tokens.
    const { accessToken, refreshToken } = await generateAccessTokensAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    //  now cookies are only modifiable by server and not by backend 
    const options = {
        httpOnly: true,
        secure: true,
    }

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                user: loggedInUser, accessToken, refreshToken
            },
                "User loggedIn successFully"
            )
        )
})

const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("accessToken",)
})
