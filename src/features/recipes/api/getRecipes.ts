import { adaptApiInitialRecipes } from '@/adapters/adaptApiInitialRecipes'
import { adaptApiRecipesBulkInfo } from '@/adapters/adaptApiRecipesBulkInfo'
import { composeRecipesData } from '@/adapters/composeRecipesData'
import { baseURL } from '@/config'
import { getKeyValues } from '@/utils/getKeyValues'
import axios from 'axios'

export const getRecipes = async (ingredientNames: string[]) => {
  const { data: apiInitialRecipes } = await axios.get(
    `${baseURL}/api/recipes/by-ingredients?ingredients=${ingredientNames.join()}`
  )
  const initialRecipes = adaptApiInitialRecipes(apiInitialRecipes)
  const ids = getKeyValues(initialRecipes, 'id')
  const { data: apiRecipesBulkInfo } = await axios.get(
    `${baseURL}/api/recipes/bulk?ids=${ids.join()}`
  )
  const recipesBulkInfo = adaptApiRecipesBulkInfo(apiRecipesBulkInfo)
  const recipes = composeRecipesData(initialRecipes, recipesBulkInfo)
  return recipes
}
