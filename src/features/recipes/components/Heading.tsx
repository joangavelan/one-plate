import { MdOutlineRefresh } from 'react-icons/md'

export const Heading = () => {
  return (
    <div className='flex items-center justify-between '>
      <h2 className='text-md font-semibold leading-7 text-slate-800 md:text-lg lg:text-xl'>
        Recipes
      </h2>
      <button className='button flex items-center gap-2 hover:border-slate-500 hover:bg-slate-100 hover:text-slate-900'>
        <MdOutlineRefresh className='text-xl' />
      </button>
    </div>
  )
}
