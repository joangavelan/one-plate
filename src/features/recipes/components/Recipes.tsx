import * as React from 'react'
import { Recipe } from '../types'
import { GetRecipes } from './GetRecipes'
import { Heading } from './Heading'
import { RecipeList } from './RecipeList'
import useIngredients from '@/stores/useIngredients'
import { getKeyValues } from '@/utils/getKeyValues'
import { getRecipes } from '../api/getRecipes'

export const Recipes = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([])
  const [loading, setLoading] = React.useState(false)
  const [canUpdateRecipes, setCanUpdateRecipes] = React.useState(false)

  const ingredients = useIngredients((state) => state.ingredients)
  const names = getKeyValues(ingredients, 'name')

  const fetchRecipes = async () => {
    setLoading(true)
    setCanUpdateRecipes(false)
    const recipes = await getRecipes(names)
    setRecipes(recipes)
    setLoading(false)
  }

  return (
    <div className='green-box relative col-span-5 flex flex-col gap-5 lg:col-span-2'>
      {loading || recipes.length > 0 ? (
        <React.Fragment>
          <Heading
            canUpdateRecipes={canUpdateRecipes}
            setCanUpdateRecipes={setCanUpdateRecipes}
            fetchRecipes={fetchRecipes}
          />
          <RecipeList loading={loading} recipes={recipes} />
        </React.Fragment>
      ) : (
        <GetRecipes
          fetchRecipes={fetchRecipes}
          ingredientsLength={ingredients.length}
        />
      )}
    </div>
  )
}
