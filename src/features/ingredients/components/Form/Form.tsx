import * as React from 'react'
import { IngredientSearch } from './Search'
import { Unit } from './Unit'
import { SubmitButton } from './SubmitButton'
import { Amount } from './Amount'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getPossibleUnits } from '../../api/getPossibleUnits'
import { getFullIngredient } from '../../api/getFullIngredient'
import useIngredients from '@/stores/useIngredients'

export type FormData = {
  amount: number
  unit: string
}

export type SelectedIngredient = {
  id: number
  name: string
}

export const IngredientForm = () => {
  const { register, handleSubmit, watch, control, setValue } =
    useForm<FormData>()

  const [selectedIngredient, setSelectedIngredient] =
    React.useState<SelectedIngredient | null>(null)
  const [possibleUnits, setPossibleUnits] = React.useState<string[]>([])

  const onSubmit: SubmitHandler<FormData> = async ({ amount, unit }) => {
    const ingredientMeta = {
      id: selectedIngredient!.id,
      amount,
      unit
    }
    const ingredient = await getFullIngredient(ingredientMeta)
    useIngredients.getState().addIngredient(ingredient)
  }

  React.useEffect(() => {
    if (selectedIngredient) {
      setPossibleUnits([])
      setValue('unit', '')
      getPossibleUnits(selectedIngredient.id).then((units) => {
        setPossibleUnits(units)
        setValue('unit', units[0] || '')
      })
    }
  }, [selectedIngredient, setValue])

  const amount = watch('amount')
  const unit = watch('unit')
  const isReadyToSubmit = selectedIngredient && amount && unit

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='my-5 flex gap-3'>
      <IngredientSearch
        selected={selectedIngredient}
        setSelected={setSelectedIngredient}
      />
      <Amount registration={register('amount', { valueAsNumber: true })} />
      <Unit units={possibleUnits} control={control} name='unit' />
      <SubmitButton disabled={!isReadyToSubmit} />
    </form>
  )
}
