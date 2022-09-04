type HeadingProps = {
  totalCalories: number
}

export const Heading = ({ totalCalories }: HeadingProps) => {
  return (
    <div className='flex justify-between text-slate-800'>
      <h2 className='text-md font-semibold leading-7 md:text-lg lg:text-xl'>
        Plate
      </h2>
      <span className='text-md block font-medium md:text-lg'>
        {totalCalories} kcal
      </span>
    </div>
  )
}
