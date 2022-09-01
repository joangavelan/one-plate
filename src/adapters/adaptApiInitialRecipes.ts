import { InitialRecipe } from '@/features/recipes/types'
import { composeRecipeIngredients } from './composeRecipeIngredients'

export const adaptApiInitialRecipes = (apiRecipes: any[]): InitialRecipe[] => {
  return apiRecipes.map(
    ({
      id,
      title,
      image,
      missedIngredients,
      usedIngredients,
      unusedIngredients
    }) => ({
      id,
      title,
      image,
      ingredients: composeRecipeIngredients(
        usedIngredients,
        missedIngredients,
        unusedIngredients
      )
    })
  )
}
