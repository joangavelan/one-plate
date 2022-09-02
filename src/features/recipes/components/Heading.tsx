import * as React from 'react'
import useIngredients from '@/stores/useIngredients'
import { MdOutlineRefresh } from 'react-icons/md'
import { Recipe } from '../types'
import { getKeyValues } from '@/utils/getKeyValues'
import { getRecipes } from '../api/getRecipes'
import { useFirstRender } from '@/hooks/useFirstRender'

type RecipesHeadingProps = {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
}

export const Heading = ({ setRecipes }: RecipesHeadingProps) => {
  const [canUpdateRecipes, setCanUpdateRecipes] = React.useState(false)
  const ingredients = useIngredients((state) => state.ingredients)
  const names = getKeyValues(ingredients, 'name')
  const isFirstRender = useFirstRender()

  const fetchRecipes = async () => {
    setCanUpdateRecipes(false)
    const recipes = await getRecipes(names)
    setRecipes(recipes)
  }

  React.useEffect(() => {
    if (isFirstRender) return
    setCanUpdateRecipes(true)
  }, [ingredients, isFirstRender])

  return (
    <div className='flex items-center justify-between '>
      <h2 className='text-md font-semibold leading-7 text-slate-800 md:text-lg lg:text-xl'>
        Recipes
      </h2>
      <button
        disabled={!canUpdateRecipes}
        className='button btnGray gap-2'
        onClick={fetchRecipes}
      >
        <MdOutlineRefresh className='text-xl' />
      </button>
    </div>
  )
}
