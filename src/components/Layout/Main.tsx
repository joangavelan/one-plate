import React from 'react'

export const Main = () => {
  return (
    <main className='my-5 grid flex-1 grid-cols-5 gap-8'>
      {/* ingredients */}
      <div className='green-box col-span-5 md:col-span-3 md:row-span-2'>
        <h2 className='text-md font-bold leading-7 text-slate-900 md:text-lg md:leading-9 lg:text-xl '>
          Search for ingredients
        </h2>
        <p className='text-sm text-slate-800 md:text-base lg:text-lg'>
          Include any ingredient you want in your meal and calculate its total
          nutrients.
        </p>
      </div>

      {/* chart */}
      <div className='green-box col-span-5 grid place-items-center md:col-span-2'>
        <h2 className='text-2xl font-bold text-slate-800'>Chart</h2>
      </div>

      {/* recipes */}
      <div className='green-box col-span-5 grid place-items-center md:col-span-2'>
        <h2 className='text-2xl font-bold text-slate-800'>Recipes</h2>
      </div>
    </main>
  )
}
