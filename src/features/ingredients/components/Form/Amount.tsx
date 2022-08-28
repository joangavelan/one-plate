import { preventNonNumericInput } from '@/utils/preventNonNumericInput'
import { UseFormRegisterReturn } from 'react-hook-form'

type AmountProps = {
  registration: UseFormRegisterReturn
}

export const Amount = ({ registration }: AmountProps) => {
  return (
    <div className='w-[3rem] min-w-[3rem] sm:w-[4-rem] sm:min-w-[4rem]'>
      <input
        type='number'
        className='inputStyles'
        placeholder='250'
        onKeyDown={preventNonNumericInput}
        {...registration}
      />
    </div>
  )
}
