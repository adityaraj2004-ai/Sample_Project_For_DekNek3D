import React from "react";
import { Link } from "react-router-dom";
const Aboutus = () => {
    return (
        <div className="bg-zinc-950 text-white pt-24">

          
            <section className="text-center max-w-5xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                    About <span className="text-[#a6ff5d]">DekNek 3D</span>
                </h1>
                <p className="text-zinc-400 mt-6 text-lg">
                    We transform ideas into stunning 3D experiences that elevate brands,
                    products, and digital storytelling.
                </p>
            </section>

          
            <section className="mt-16 px-4">
                <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&auto=format&fit=crop&q=60"
                        alt="3D work"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            </section>

            
            <section className="mt-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">
                        Our <span className="text-[#a6ff5d]">Mission</span>
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Our mission is to simplify 3D content creation for businesses and
                        creators. We aim to bridge the gap between imagination and reality
                        by providing tools and services that are powerful yet accessible.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-2xl">
                    <p className="text-zinc-300">
                        From product visualization to immersive animations, we help brands
                        stand out in a digital-first world.
                    </p>
                </div>
            </section>

        
            <section className="mt-24 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Why Choose <span className="text-[#a6ff5d]">Us</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-zinc-900 p-6 rounded-xl hover:-translate-y-1 transition">
                        <h3 className="text-lg font-medium mb-2">High Quality</h3>
                        <p className="text-zinc-400 text-sm">
                            Industry-level rendering and animation quality for your projects.
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-xl hover:-translate-y-1 transition">
                        <h3 className="text-lg font-medium mb-2">Fast Delivery</h3>
                        <p className="text-zinc-400 text-sm">
                            Optimized workflows ensure quick turnaround times.
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-xl hover:-translate-y-1 transition">
                        <h3 className="text-lg font-medium mb-2">Custom Solutions</h3>
                        <p className="text-zinc-400 text-sm">
                            Tailored 3D solutions based on your business needs.
                        </p>
                    </div>

                </div>
            </section>
         
            <section className="mt-24 max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Meet Our <span className="text-[#a6ff5d]">Team</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="bg-zinc-900 rounded-xl overflow-hidden hover:-translate-y-1 transition"
                        >
                            <img
                                src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                                alt="team"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-medium">Team Member</h3>
                                <p className="text-sm text-zinc-400">3D Artist</p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

           
            <section className="mt-24 text-center px-4 pb-20">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Ready to bring your ideas to life?
                </h2>
                <Link to="/login">
                    <button className="mt-6 px-6 py-3 bg-[#a6ff5d] text-black rounded-full font-medium hover:scale-105 transition">
                        Get Started
                    </button>
                </Link>
            </section>

        </div>
    );
};

export default Aboutus;