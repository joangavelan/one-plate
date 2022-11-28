import * as React from 'react'
import { IngredientSearchInput } from './Search'
import { Units } from './Units'
import { SubmitButton } from './SubmitButton'
import { Amount } from './Amount'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getPossibleUnits } from '../../api/getPossibleUnits'
import { getFullIngredient } from '../../api/getFullIngredient'
import useIngredients from '@/stores/useIngredients'
import { AxiosError } from 'axios'

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
    formState: { isSubmitSuccessful }
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
  const [loadingNewIngredient, setLoadingNewIngredient] = React.useState(false)
  const [isReadyToSubmit, setIsReadyToSubmit] = React.useState(false)

  const onSubmit: SubmitHandler<FormData> = async ({ amount, unit }) => {
    if (loadingNewIngredient) return // prevents double submission
    setLoadingNewIngredient(true)
    const ingredientMeta = {
      id: selectedIngredient!.id,
      amount: +amount,
      unit
    }
    const ingredient = await getFullIngredient(ingredientMeta)
    useIngredients.getState().addIngredient(ingredient)
    setLoadingNewIngredient(false)
  }

  React.useEffect(() => {
    reset()
    setPossibleUnits([])
    setSelectedIngredient(null)
  }, [isSubmitSuccessful, reset])

  React.useEffect(() => {
    if (selectedIngredient) {
      setPossibleUnits([])
      setLoadingUnits(true)
      setValue('unit', '')
      getPossibleUnits(selectedIngredient.id)
        .then((units) => {
          setPossibleUnits(units || [])
          setValue('unit', units[0] || '')
          setLoadingUnits(false)
        })
        .catch((error) => {
          alert("Error: Couldn't fetch the amount units for this ingredient.")
          setPossibleUnits([])
          setLoadingUnits(false)
          console.log(error)
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
      <SubmitButton
        loadingNewIngredient={loadingNewIngredient}
        disabled={!isReadyToSubmit}
      />
    </form>
  )
}
