export const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <span className='block text-sm font-medium text-gray-700 lg:text-base'>
        0 ingredients
      </span>
      <button className='rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-slate-700 outline-none transition duration-300 hover:border-red-400 hover:bg-red-50 hover:text-red-800 lg:px-5 lg:py-2 lg:text-base'>
        Remove All
      </button>
    </div>
  )
}
