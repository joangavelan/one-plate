import { Ingredient } from '@/features/ingredients/types'

export const adaptApiIngredient = ({
  id,
  name,
  image,
  amount,
  unitLong,
  nutrition: { nutrients: initialNutrients }
}: any): Ingredient => {
  const chosenNutrients = ['Protein', 'Carbohydrates', 'Fat', 'Calories']
  const nutrients = initialNutrients
    .filter((initialNutrient: any) =>
      chosenNutrients.includes(initialNutrient.name)
    )
    .map(({ name, amount, unit }: any) => ({
      name,
      amount,
      unit
    }))

  return {
    id,
    image: `https://spoonacular.com/cdn/ingredients_100x100/${image}`,
    name,
    amount,
    unit: unitLong,
    nutrients
  }
}
