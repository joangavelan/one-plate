import useIngredients from '@/stores/useIngredients'

type IngredientsFooterProps = {
  ingredientsLength: number
}

export const Footer = ({ ingredientsLength }: IngredientsFooterProps) => {
  const ingredients = useIngredients((state) => state.ingredients)
  const removeAllIngredients = useIngredients(
    (state) => state.removeAllIngredients
  )

  return (
    <div className='flex items-center justify-between'>
      <span className='block text-sm font-medium text-gray-700 lg:text-base'>
        {ingredientsLength} ingredients
      </span>
      <button
        disabled={!ingredients.length}
        onClick={removeAllIngredients}
        className='button btnRed'
      >
        Remove All
      </button>
    </div>
  )
}
