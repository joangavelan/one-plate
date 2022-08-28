import * as React from 'react'
import { IngredientSearch } from './Search'
import { Unit } from './Unit'
import { SubmitButton } from './SubmitButton'
import { Amount } from './Amount'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  searchQuery: z.string().trim().min(1),
  amount: z.number(),
  unit: z.string()
})

export type FormData = {
  searchQuery: string
  amount: number
  unit: string
}

export const IngredientForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })
  const [selectedIngredient, setSelectedIngredient] = React.useState('')
  const [possibleUnits, setPossibleUnits] = React.useState([])

  const query = watch('searchQuery')

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='my-5 flex gap-3'>
      <IngredientSearch
        registration={register('searchQuery')}
        query={query}
        selected={selectedIngredient}
        setSelected={setSelectedIngredient}
      />
      <Amount registration={register('amount', { valueAsNumber: true })} />
      <Unit units={possibleUnits} control={control} name='unit' />
      <SubmitButton />
    </form>
  )
}
