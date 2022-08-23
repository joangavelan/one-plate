import { IngredientSearch } from './Search'
import { Unit } from './Unit'
import { Quantity } from './Quantity'
import { SubmitButton } from './SubmitButton'

export const IngredientForm = () => {
  return (
    <form className='my-5 flex gap-3'>
      <IngredientSearch />
      <Quantity />
      <Unit />
      <SubmitButton />
    </form>
  )
}
