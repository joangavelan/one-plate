import { BsFillCaretDownFill } from 'react-icons/bs'
import { Spinner } from '@/components/Elements/Spinner'

type UnitProps = {
  value: string
  loadingUnits: boolean
}

export const Unit = ({ value, loadingUnits }: UnitProps) => {
  if (loadingUnits) {
    return <Spinner />
  }

  if (!value) {
    return <span className='text-gray-500'>units</span>
  }

  return (
    <>
      <span>{value}</span>
      <BsFillCaretDownFill className='translate-y-[1.2px]' />
    </>
  )
}
