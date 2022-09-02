import { BsFillPieChartFill } from 'react-icons/bs'

export const NoData = () => {
  return (
    <div className='green-box col-span-5 grid min-h-[20rem] place-items-center text-gray-400 lg:col-span-2'>
      <div className='flex flex-col items-center gap-4'>
        <BsFillPieChartFill className='h-28 w-28 lg:h-40 lg:w-40' />
        <p className='text-base font-medium lg:text-lg'>No data available</p>
      </div>
    </div>
  )
}
