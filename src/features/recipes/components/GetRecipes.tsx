import useIngredients from '@/stores/useIngredients'
import { getKeyValues } from '@/utils/getKeyValues'
import { getRecipes } from '../api/getRecipes'
import { Recipe } from '../types'

type GetRecipesProps = {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
}

export const GetRecipes = ({ setRecipes }: GetRecipesProps) => {
  const ingredients = useIngredients((state) => state.ingredients)
  const names = getKeyValues(ingredients, 'name')

  const fetchRecipes = async () => {
    const recipes = await getRecipes(names)
    setRecipes(recipes)
  }

  return (
    <div className='grid h-full min-h-[10rem] place-items-center'>
      <button
        onClick={fetchRecipes}
        disabled={!ingredients.length}
        className='button btnGray'
      >
        Get Recipes
      </button>
    </div>
  )
}
