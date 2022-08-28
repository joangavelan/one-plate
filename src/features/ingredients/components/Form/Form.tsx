import * as React from 'react'
import { IngredientSearch } from './Search'
import { Unit } from './Unit'
import { SubmitButton } from './SubmitButton'
import { Amount } from './Amount'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormData = {
  searchQuery: string
  amount: number
  unit: string
}

export const IngredientForm = () => {
  const { register, handleSubmit, watch } = useForm<FormData>()
  const [selectedIngredient, setSelectedIngredient] = React.useState('')

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  const query = watch('searchQuery')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='my-5 flex gap-3'>
      <IngredientSearch
        registration={register('searchQuery')}
        query={query}
        selected={selectedIngredient}
        setSelected={setSelectedIngredient}
      />
      <Amount />
      <Unit />
      <SubmitButton />
    </form>
  )
}
