import React from "react";
import model1 from "../assets/model1.jpg";
import model2 from "../assets/model2.jpg";
import model3 from "../assets/model3.jpg";
import model4 from "../assets/model4.jpg";
import model5 from "../assets/model5.jpg";
import model6 from "../assets/model6.jpg";


const Hero = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                    *{
                        font-family: "Poppins", sans-serif;
                    }
                    @keyframes rotate {
                        100% {
                            transform: rotate(1turn);
                        }
                    }
                    @keyframes cardBounce {
                        0%, 100% {
                            transform: translateY(0);
                            box-shadow: 0 4px 15px rgba(166, 255, 93, 0.3);
                        }
                        50% {
                            transform: translateY(-8px);
                            box-shadow: 0 12px 25px rgba(166, 255, 93, 0.5);
                        }
                    }
            
                    .rainbow::before {
                        content: '';
                        position: absolute;
                        z-index: -2;
                        left: -50%;
                        top: -50%;
                        width: 200%;
                        height: 200%;
                        background-position: 100% 50%;
                        background-repeat: no-repeat;
                        background-size: 50% 30%;
                        filter: blur(6px);
                        background-image: linear-gradient(#FFF);
                        animation: rotate 4s linear infinite;
                    }
                `}
            </style>

            <header className='bg-black pb-20 text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10'>


                <div className="rainbow relative z-0  bg-white/15 overflow-hidden p-px flex items-center justify-center rounded-full transition duration-300 active:scale-100 mt-28 md:mt-32">
                    <button className="flex items-center justify-center gap-3 pl-4 pr-6 py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
                        <div className="relative flex size-3.5 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-[#A6FF5D] opacity-75 animate-ping duration-300"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-[#A6FF5D]"></span>
                        </div>
                        <span className='text-xs'>UNLIMITED 3D MODELS FOR DESIGN</span>
                    </button>
                </div>

                <h1 className="text-4xl md:text-[64px]/[82px] text-center max-w-4xl mt-5 bg-clip-text leading-tight px-4 font-bold">
                    <span className="text-[#a6ff5d] font-extrabold ">Build</span> Stunning <span className="text-[#a6ff5d] font-extrabold ">3D</span> Models 
                </h1>
                <p className="text-lg md:text-base text-gray-300 bg-clip-text text-center max-w-lg mt-4.5 px-4">
                    From Text and Images which are powered by AI, and are ready to use in your projects.
                </p>

                <div className='flex gap-3 mt-8'>
                    <button className="bg-[#A6FF5D] hover:bg-[#A6FF5D]/90 text-gray-800 px-6 py-2.5 rounded-full text-sm transition cursor-pointer group">
                         <div className="relative overflow-hidden">
                            <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                                Get Started today
                            </span>
                            <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                                Get Started today
                            </span>
                        </div>
                    </button>
                    <div className="bg-white/15 hover:bg-white/10 p-px flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                        <button className="px-6 text-sm py-3 text-white rounded-full bg-white/5 cursor-pointer">
                            Our products
                        </button>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center gap-10 md:gap-20 mx-auto mt-17 px-4 flex-wrap">
                  
                </div>

                <div className='scroll-down flex flex-col items-center gap-4 mt-5 animate-bounce cursor-pointer'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0zm-7-3v4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <p className='text-sm text-white/50'>Scroll down</p>
                </div>


            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 id="Samples"  className="text-3xl mt-5 font-semibold text-center mx-auto">Samples</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
              Here are a few samples of the 3D models that you can create using our platform. 
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12">

  <div className="max-w-72 w-full transition duration-500" style={{ animation: 'cardBounce 3s ease-in-out infinite' }}>
    <div className="w-full h-48 overflow-hidden rounded-xl">
      <img
        className="w-full h-full object-cover brightness-75 contrast-105"
        src={model1}
        alt="Model"
      />
    </div>
  </div>

<div className="max-w-72 w-full transition duration-500" style={{ animation: 'cardBounce 3s ease-in-out infinite 0.2s' }}>
    <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
            className="w-full h-full object-cover brightness-75 contrast-105"
            src={model2}
            alt="Model"
        />
    </div>
</div>

<div className="max-w-72 w-full transition duration-500" style={{ animation: 'cardBounce 3s ease-in-out infinite 0.4s' }}>
    <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
            className="w-full h-full object-cover brightness-75 contrast-105"
            src={model3}
            alt="Model"
        />
    </div>
  
</div>

<div className="max-w-72 w-full transition duration-500" style={{ animation: 'cardBounce 3s ease-in-out infinite 0.6s' }}>
    <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
            className="w-full h-full object-cover brightness-75 contrast-105"
            src={model4}
            alt="Model"
        />
    </div>
 
</div>

<div className="max-w-72 w-full transition duration-500" style={{ animation: 'cardBounce 3s ease-in-out infinite 0.8s' }}>
    <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
            className="w-full h-full object-cover brightness-75 contrast-105"
            src={model5}
            alt="Model"
        />
    </div>

</div>

<div className="max-w-72 w-full transition duration-500" style={{ animation: 'cardBounce 3s ease-in-out infinite 1s' }}>
    <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
            className="w-full h-full object-cover brightness-75 contrast-105"
            src={model6}
            alt="Model"
        />
    </div>

</div>

</div>
                    
                
            </header>
        </>
    )
}

export default Hero