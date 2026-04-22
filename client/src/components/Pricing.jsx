import React from 'react'

const Pricing = () => {
  return (
  <section id='Pricing' >
  <div className="w-full py-20 bg-zinc-950 text-white">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-semibold">
        Simple <span className="text-[#a6ff5d]">Pricing</span>
      </h2>
      <p className="text-zinc-400 mt-3">
        Choose the plan that fits your needs
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-2xl p-8 h-[520px] flex flex-col justify-between hover:-translate-y-1 transition duration-300">
        <div>
          <h3 className="text-xl font-medium">Starter</h3>
          <p className="text-zinc-400 mt-2 text-sm">For beginners</p>

          <h1 className="text-4xl font-semibold mt-6">
            ₹0<span className="text-lg text-zinc-400">/mo</span>
          </h1>

          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            <li>✔ Basic features</li>
            <li>✔ Limited models</li>
            <li>✔ Community support</li>
          </ul>
        </div>

        <button className="mt-8 w-full py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition">
          Get Started
        </button>
      </div>

      {/* Card 2 (Highlighted) */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-2xl p-8 h-[560px] flex flex-col justify-between border border-[#a6ff5d]/30 hover:-translate-y-1 transition duration-300">
        <div>
          <h3 className="text-xl font-medium text-[#a6ff5d]">Pro</h3>
          <p className="text-zinc-400 mt-2 text-sm">Most popular</p>

          <h1 className="text-4xl font-semibold mt-6">
            ₹499<span className="text-lg text-zinc-400">/mo</span>
          </h1>

          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            <li>✔ All starter features</li>
            <li>✔ Unlimited models</li>
            <li>✔ Faster rendering</li>
            <li>✔ Priority support</li>
          </ul>
        </div>

        <button className="mt-8 w-full py-2 rounded-lg bg-[#a6ff5d] text-black font-medium hover:opacity-90 transition">
          Upgrade Now
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-2xl p-8 h-[520px] flex flex-col justify-between hover:-translate-y-1 transition duration-300">
        <div>
          <h3 className="text-xl font-medium">Enterprise</h3>
          <p className="text-zinc-400 mt-2 text-sm">For teams</p>

          <h1 className="text-4xl font-semibold mt-6">
            ₹999<span className="text-lg text-zinc-400">/mo</span>
          </h1>

          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Dedicated support</li>
            <li>✔ Custom solutions</li>
          </ul>
        </div>

        <button className="mt-8 w-full py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</div>
  </section>
  )
}

export default Pricing