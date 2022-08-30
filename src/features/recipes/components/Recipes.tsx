import { GetRecipes } from './GetRecipes'
import { Heading } from './Heading'
import { RecipeList } from './RecipeList'

const recipes = ['item']

export const Recipes = () => {
  return (
    <div className='green-box relative col-span-5 flex flex-col gap-5 lg:col-span-2'>
      {recipes?.length > 0 ? (
        <>
          <Heading />
          <RecipeList />
        </>
      ) : (
        <GetRecipes />
      )}
    </div>
  )
}
