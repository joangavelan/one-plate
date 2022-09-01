import { MdOutlineRefresh } from 'react-icons/md'

export const Heading = () => {
  return (
    <div className='flex items-center justify-between '>
      <h2 className='text-md font-semibold leading-7 text-slate-800 md:text-lg lg:text-xl'>
        Recipes
      </h2>
      <button className='button btnGray gap-2'>
        <MdOutlineRefresh className='text-xl' />
      </button>
    </div>
  )
}
