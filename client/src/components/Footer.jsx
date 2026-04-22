import React from 'react';
import { FaTelegram, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer id='Contact' className="px-6 pt-8 md:px-16 lg:px-36 w-full bg-black text-gray-300">
            
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                
                {/* Left Section */}
                <div className="md:max-w-96">
                  <p>DekNek <span className='text-[#a6ff5d]' >3D</span></p>

                    <p className="mt-6 text-sm">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                        <img 
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" 
                            alt="google play" 
                            className="h-10 w-auto border border-white rounded" 
                        />
                        <img 
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" 
                            alt="app store" 
                            className="h-10 w-auto border border-white rounded" 
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">

                    {/* Social Icons */}
                    <div>
                        <h2 className="font-semibold mb-5">Connect</h2>

                        <div className="flex items-center gap-4">

                            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-[#a6ff5d] hover:text-black hover:scale-110 transition">
                                <FaTelegram size={18} />
                            </a>

                            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-[#a6ff5d] hover:text-black hover:scale-110 transition">
                                <FaXTwitter size={18} />
                            </a>

                            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-[#a6ff5d] hover:text-black hover:scale-110 transition">
                                <FaInstagram size={18} />
                            </a>

                            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-[#a6ff5d] hover:text-black hover:scale-110 transition">
                                <FaFacebookF size={18} />
                            </a>

                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>contact@DekNek.com</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} ©{" "}
                <a href="#">DekNek 3D</a>. All Rights Reserved.
            </p>

        </footer>
    );
};

export default Footer;