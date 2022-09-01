export const Legend = ({ data }: { data: any }) => {
  return (
    <ul className='mx-auto mt-1.5 flex gap-3 sm:gap-5'>
      {data.labels.map((label: string, index: number) => (
        <li className='flex items-center gap-1.5' key={label}>
          <div
            className='h-3 w-3 rounded-lg border'
            style={{
              borderColor: data.datasets[0].borderColor[index],
              backgroundColor: data.datasets[0].backgroundColor[index]
            }}
          />
          <p className='pointer-events-none select-none text-sm capitalize text-gray-600 md:text-base'>
            {label}
          </p>
        </li>
      ))}
    </ul>
  )
}
