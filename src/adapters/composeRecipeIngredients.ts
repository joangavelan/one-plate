import type {
  IngredientStatus,
  RecipeIngredient
} from '@/features/recipes/components/Ingredient'

export const composeRecipeIngredients = (
  usedIngredients: any[],
  missedIngredients: any[],
  unusedIngredients: any[]
): RecipeIngredient[] => {
  const recipeIngredients: RecipeIngredient[] = []

  function pushIngredient(
    { id, name, amount, unitLong: unit }: any,
    status: IngredientStatus
  ) {
    recipeIngredients.push({
      id,
      name,
      amount,
      unit,
      status
    })
  }

  usedIngredients.forEach((i) => pushIngredient(i, 'used'))
  missedIngredients.forEach((i) => pushIngredient(i, 'missed'))
  unusedIngredients.forEach((i) => pushIngredient(i, 'unused'))

  return recipeIngredients
}
