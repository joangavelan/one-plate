import { BsFillPieChartFill } from 'react-icons/bs'

export const NoData = () => {
  return (
    <div className='green-box col-span-5 grid place-items-center gap-4 text-gray-400 lg:col-span-2'>
      <div className='my-5 flex flex-col items-center gap-3'>
        <BsFillPieChartFill className='h-32 w-32 md:h-40 md:w-40' />
        <p className='text-lg font-medium'>No data available</p>
      </div>
    </div>
  )
}
