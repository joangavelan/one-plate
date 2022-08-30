import useIngredients from '@/stores/useIngredients'
import { Footer } from './Footer'
import Ingredient from './Ingredient'
import { NoIngredients } from './NoIngredients'

export const IngredientList = () => {
  const ingredients = useIngredients((state) => state.ingredients)
  console.log(ingredients)

  return (
    <div className='my-4 flex flex-1 flex-col justify-between gap-4 overflow-hidden'>
      {/* list */}
      {ingredients.length > 0 ? (
        <div className='flex flex-1 flex-col gap-3 overflow-y-auto'>
          {ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      ) : (
        // no ingredients fallback
        <NoIngredients />
      )}
      {/* footer */}
      <Footer ingredientsLength={ingredients.length} />
    </div>
  )
}
