import { TbMeat } from 'react-icons/tb'

export const NoIngredients = () => {
  return (
    <div className='flex min-h-[15rem] flex-1 flex-col items-center justify-center overflow-y-scroll text-gray-400'>
      <TbMeat className='text-6xl' />
      <p className='mt-2 font-medium'>No ingredients yet</p>
    </div>
  )
}
