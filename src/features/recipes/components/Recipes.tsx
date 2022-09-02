import * as React from 'react'
import { Recipe } from '../types'
import { GetRecipes } from './GetRecipes'
import { Heading } from './Heading'
import { RecipeList } from './RecipeList'

export const Recipes = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([])

  return (
    <div className='green-box relative col-span-5 flex flex-col gap-5 lg:col-span-2'>
      {recipes.length > 0 ? (
        <React.Fragment>
          <Heading setRecipes={setRecipes} />
          <RecipeList recipes={recipes} />
        </React.Fragment>
      ) : (
        <GetRecipes setRecipes={setRecipes} />
      )}
    </div>
  )
}
