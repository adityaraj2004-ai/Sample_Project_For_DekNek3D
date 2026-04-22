import React from 'react'

const Home = () => {
  return (
    <>

    <div className="min-h-screen bg-zinc-950 text-white px-6 md:px-16 py-10">

    
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Welcome back 👋
        </h1>

        <button className="bg-[#a6ff5d] text-black px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition">
          New Project
        </button>
      </div>

    
      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-zinc-400 text-sm">Total Projects</p>
          <h2 className="text-2xl font-semibold mt-2">12</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-zinc-400 text-sm">Active Models</p>
          <h2 className="text-2xl font-semibold mt-2">8</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-zinc-400 text-sm">Completed</p>
          <h2 className="text-2xl font-semibold mt-2">4</h2>
        </div>

      </div>

  
      <div>
        <h2 className="text-xl font-semibold mb-6">Recent Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-xl overflow-hidden hover:-translate-y-1 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"
                alt="project"
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="font-medium">3D Product Render</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  High-quality product visualization
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

  
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition">
            Upload Model
          </button>
          <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition">
            Start Animation
          </button>
          <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition">
            View Analytics
          </button>
        </div>
      </div>

    </div>
 



    </>
  )
}

export default Home