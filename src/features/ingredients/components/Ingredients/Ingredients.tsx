import { IngredientForm } from '../Form'
import { Heading } from '../Heading'
import { IngredientList } from '../List'

export const Ingredients = () => {
  return (
    <div className='green-box col-span-5 flex flex-col lg:col-span-3 lg:row-span-2'>
      <Heading />
      <IngredientForm />
      <hr className='border border-gray-200' />
      <IngredientList />
    </div>
  )
}
