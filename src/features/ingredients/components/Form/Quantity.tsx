import * as React from 'react'

export const Quantity = () => {
  const preventNonNumericInput = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight']
      if (isNaN(Number(e.key)) && !allowedKeys.includes(e.key)) {
        e.preventDefault()
      }
    },
    []
  )

  return (
    <div className='w-[3rem] min-w-[3rem] md:w-[4-rem] md:min-w-[4rem]'>
      <input
        type='string'
        className='inputStyles'
        placeholder='250'
        onKeyDown={preventNonNumericInput}
      />
    </div>
  )
}
