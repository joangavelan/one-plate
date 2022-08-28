import { FaPlus } from 'react-icons/fa'

export const SubmitButton = () => {
  return (
    <div>
      <button
        disabled={false}
        type='submit'
        className='h-full rounded-lg border border-lime-300 bg-lime-200 px-2.5 py-1.5 text-lime-700 transition duration-200 enabled:hover:bg-lime-400 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500 sm:px-4 sm:py-2'
      >
        <FaPlus />
      </button>
    </div>
  )
}
