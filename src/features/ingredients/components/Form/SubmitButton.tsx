import { FaPlus } from 'react-icons/fa'

export const SubmitButton = () => {
  return (
    <div>
      <button
        type='submit'
        className='h-full rounded-lg border border-lime-300 bg-lime-200 px-2.5 py-1.5 text-lime-700 sm:px-4 sm:py-2'
      >
        <FaPlus />
      </button>
    </div>
  )
}
