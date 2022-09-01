import { RecipeBulkInfo } from '@/features/recipes/types'

export const adaptApiRecipesBulkInfo = (recipes: any[]): RecipeBulkInfo[] => {
  return recipes.map(({ readyInMinutes, spoonacularSourceUrl }) => ({
    readyInMinutes,
    spoonacularSourceUrl
  }))
}
