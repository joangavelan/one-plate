import * as React from 'react'
import { IngredientSearch } from './Search'
import { Unit } from './Unit'
import { SubmitButton } from './SubmitButton'
import { Amount } from './Amount'

export const IngredientForm = () => {
  return (
    <form className='my-5 flex gap-3'>
      <IngredientSearch />
      <Amount />
      <Unit />
      <SubmitButton />
    </form>
  )
}
