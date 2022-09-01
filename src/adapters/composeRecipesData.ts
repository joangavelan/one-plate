import { InitialRecipe, Recipe, RecipeBulkInfo } from '@/features/recipes/types'

export const composeRecipesData = (
  initialRecipes: InitialRecipe[],
  recipesBulkInfo: RecipeBulkInfo[]
): Recipe[] => {
  return initialRecipes.map((initialRecipe, index) => ({
    ...initialRecipe,
    ...recipesBulkInfo[index]!
  }))
}
