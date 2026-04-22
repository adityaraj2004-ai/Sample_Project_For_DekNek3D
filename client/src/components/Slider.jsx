import React from 'react';

const Slider = () => {
    const names = ["AR/VR", "Gaming", "E-commerce", "Education", "Healthcare", "Architecture", "Entertainment", "Manufacturing", "Automotive", "Fashion", "Advertising", "Film & Animation", "Product Design", "Virtual Events", "Metaverse", "3D Printing"];

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative select-none h-10 bg-black py-2">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
                <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                    <div className="flex items-center justify-center gap-12">
                        {[...names, ...names].map((name, index) => (
                            <div key={index} className="flex items-center justify-center mx-6 text-xl font-semibold whitespace-nowrap text-white">
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
            </div>
        </>
    );
};
export default Slider