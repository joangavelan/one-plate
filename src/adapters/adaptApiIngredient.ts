import { Ingredient } from '@/features/ingredients/types'
import { nanoid } from 'nanoid'

export const adaptApiIngredient = ({
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
    id: nanoid(),
    image: `https://spoonacular.com/cdn/ingredients_100x100/${image}`,
    name,
    amount,
    unit: unitLong,
    nutrients
  }
}
