import { Footer } from './Footer'
import Ingredient from './Ingredient'
import { NoIngredients } from './NoIngredients'

const ingredients = [
  {
    id: 1,
    image:
      'https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png',
    name: 'chicken breast',
    amount: 250.0,
    unit: 'g',
    nutrients: [
      {
        name: 'Protein',
        amount: 54.45,
        unit: 'g'
      },
      {
        name: 'Carbohydrates',
        amount: 32.71,
        unit: 'g'
      },
      {
        name: 'Fat',
        amount: 16.03,
        unit: 'g'
      }
    ],
    calories: {
      amount: 548.17,
      unit: 'kcal'
    }
  }
]

export const IngredientList = () => {
  return (
    <div className='my-4 flex flex-1 flex-col justify-between gap-4'>
      {ingredients.length > 0 ? (
        ingredients.map((ingredient) => (
          <div key={ingredient.id} className='flex-1 overflow-y-scroll'>
            <Ingredient ingredient={ingredient} />
          </div>
        ))
      ) : (
        <NoIngredients />
      )}
      <Footer />
    </div>
  )
}
