import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../utils/auth';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const handleForm = async (e) => {
        e.preventDefault();

        try {
            await loginUser(form);   
            navigate('/home');           
        } catch (err) {
            console.log(err.response?.data?.message);
        }
    }
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>

            <section className="bg-black px-4 py-24 min-h-screen">
                <div className="w-full mx-auto flex flex-col md:flex-row max-md:items-center justify-center gap-12 mt-4 md:gap-16">

                    <div className="flex flex-col mt-10">
                        <p className="text-sm max-md:text-center font-medium text-green-600 uppercase mb-2">Get In Touch</p>
                        <h1 className="text-5xl/14 max-md:text-center font-bold text-white max-w-2xs mb-4">Let's build something real.</h1>
                        <p className="text-base/5.5 text-zinc-500 max-md:text-center max-w-2xs">Let's turn your ideas into meaningful products that solve real problems and create real impact.</p>
                        <div className="flex items-center max-md:justify-center gap-4 mt-7 cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 18.33a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.667" stroke="#71717b" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.942 4.242C12.683 7.617 8.333 8.701 1.875 9.117m16.25 1.58c-5.517-1.175-10.117.834-13.65 5.267" stroke="#71717b" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.133 2.29c3.642 5 5 7.85 6.667 14.766" stroke="#71717b" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /></svg>

                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.333 6.664a5 5 0 0 1 5 5v5.833H15v-5.833a1.667 1.667 0 1 0-3.333 0v5.833H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 4.997a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="#71717b" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /></svg>

                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.333 3.335s-.583 1.75-1.666 2.833c1.333 8.333-7.834 14.417-15 9.667 1.833.083 3.666-.5 5-1.667-4.167-1.25-6.25-6.167-4.167-10C4.333 6.335 7.167 7.585 10 7.501c-.75-3.5 3.333-5.5 5.833-3.166.917 0 2.5-1 2.5-1" stroke="#71717b" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /></svg>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17.004a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0 2 2 0 0 1 1.4 1.4 24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0 2 2 0 0 1-1.4-1.4" stroke="#71717b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="m10 15 5-3-5-3z" stroke="#71717b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>

                    <div className="w-full max-w-sm border border-neutral-800 rounded-2xl p-8">
                        <h2 className="text-base font-medium text-white mb-5.5">Send Message</h2>
                        <form onSubmit={(e)=>{handleForm(e)}} className="flex flex-col gap-4">

                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Email</label>
                                <input type="email" placeholder="Enter your email" className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-neutral-600 transition-colors"
                                value={form.email}
                                onChange={(e)=>{setForm({...form, email: e.target.value})}}
                                />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs text-zinc-400">Password</label>
                                <input type="password" placeholder="Enter your password" className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-neutral-600 transition-colors"
                                value={form.password}
                                onChange={(e)=>{setForm({...form, password: e.target.value})}}
                                />
                            </div>
                            <button  type="submit" className="bg-green-600 hover:bg-green-700 text-white text-base py-3 rounded-lg transition-colors cursor-pointer mt-1">Login</button>
                            <p className="text-sm text-zinc-400">
                                Don't have an account? <Link to="/register" className="text-green-600 hover:text-green-700">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login