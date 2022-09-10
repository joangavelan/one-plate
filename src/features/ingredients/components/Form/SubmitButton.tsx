import { Spinner } from '@/components/Elements/Spinner'
import { FaPlus } from 'react-icons/fa'

type SubmitButtonProps = {
  loadingNewIngredient: boolean
  disabled: boolean
}

export const SubmitButton = ({
  loadingNewIngredient,
  disabled
}: SubmitButtonProps) => {
  return (
    <div>
      <button
        disabled={disabled}
        type='submit'
        className={`${
          loadingNewIngredient ? 'pointer-events-none' : ''
        } h-full rounded-lg border border-lime-300 bg-lime-200 px-2.5 py-1.5 text-lime-700 enabled:hover:bg-lime-400 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500 sm:px-4 sm:py-2`}
      >
        {loadingNewIngredient ? <Spinner size='sm' /> : <FaPlus />}
      </button>
    </div>
  )
}
