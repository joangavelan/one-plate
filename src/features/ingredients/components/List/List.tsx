import { Footer } from '@/components/Layout'
import { NoIngredients } from './NoIngredients'

const ingredients = [
  {
    id: 1,
    image: 'src',
    name: 'chicken breast',
    amount: 250.0,
    unit: 'g.',
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
        name: 'Calories',
        amount: 548.17,
        unit: 'kcal'
      },
      {
        name: 'Fat',
        amount: 16.03,
        unit: 'g'
      }
    ]
  }
]

export const IngredientList = () => {
  return (
    <div className='my-4 flex flex-1 flex-col gap-4'>
      <NoIngredients />

      <Footer />
    </div>
  )
}
