import * as React from 'react'
import { MdOutlineRefresh } from 'react-icons/md'
import useIngredients from '@/stores/useIngredients'
import { useFirstRender } from '@/hooks/useFirstRender'

type RecipesHeadingProps = {
  canUpdateRecipes: boolean
  setCanUpdateRecipes: React.Dispatch<React.SetStateAction<boolean>>
  fetchRecipes: () => void
}

export const Heading = ({
  canUpdateRecipes,
  setCanUpdateRecipes,
  fetchRecipes
}: RecipesHeadingProps) => {
  const ingredients = useIngredients((state) => state.ingredients)
  const firstRender = useFirstRender()

  React.useEffect(() => {
    if (!firstRender) {
      setCanUpdateRecipes(true)
    }
  }, [ingredients])

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
