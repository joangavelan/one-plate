import * as React from 'react'
import { IngredientSearchInput } from './Search'
import { Units } from './Units'
import { SubmitButton } from './SubmitButton'
import { Amount } from './Amount'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getPossibleUnits } from '../../api/getPossibleUnits'
import { getFullIngredient } from '../../api/getFullIngredient'
import useIngredients from '@/stores/useIngredients'

export type FormData = {
  amount: string
  unit: string
}

export type SelectedIngredient = {
  id: number
  name: string
}

export const IngredientForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      amount: '',
      unit: ''
    }
  })

  const [selectedIngredient, setSelectedIngredient] =
    React.useState<SelectedIngredient | null>(null)
  const [possibleUnits, setPossibleUnits] = React.useState<string[]>([])
  const [loadingUnits, setLoadingUnits] = React.useState(false)
  const [isReadyToSubmit, setIsReadyToSubmit] = React.useState(false)

  const onSubmit: SubmitHandler<FormData> = async ({ amount, unit }) => {
    const ingredientMeta = {
      id: selectedIngredient!.id,
      amount: +amount,
      unit
    }
    const ingredient = await getFullIngredient(ingredientMeta)
    useIngredients.getState().addIngredient(ingredient)
  }

  React.useEffect(() => {
    reset()
    setPossibleUnits([])
    setSelectedIngredient(null)
  }, [isSubmitting, reset])

  React.useEffect(() => {
    if (selectedIngredient) {
      setPossibleUnits([])
      setLoadingUnits(true)
      setValue('unit', '')
      getPossibleUnits(selectedIngredient.id).then((units) => {
        setPossibleUnits(units || [])
        setValue('unit', units[0] || '')
        setLoadingUnits(false)
      })
    }
  }, [selectedIngredient, setValue])

  React.useEffect(() => {
    const subscription = watch(({ amount, unit }) => {
      if (!!selectedIngredient && !!amount && !!unit) {
        setIsReadyToSubmit(true)
      } else {
        setIsReadyToSubmit(false)
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, selectedIngredient])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='my-5 flex gap-3'>
      <IngredientSearchInput
        selected={selectedIngredient}
        setSelected={setSelectedIngredient}
      />
      <Amount registration={register('amount')} />
      <Units
        units={possibleUnits}
        loadingUnits={loadingUnits}
        control={control}
        name='unit'
      />
      <SubmitButton disabled={!isReadyToSubmit} />
    </form>
  )
}
