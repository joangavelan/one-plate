import React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BiBlock } from 'react-icons/bi'
import { RecipeIngredient as TRecipeIngredient } from '../types'

type RecipeIngredientProps = Omit<TRecipeIngredient, 'id'>

export const RecipeIngredient = ({
  status,
  name,
  amount,
  unit
}: RecipeIngredientProps) => {
  return (
    <div className='grid grid-cols-[auto_minmax(0,_1fr)] gap-1 [&>svg]:translate-y-[3px] [&>svg]:transform'>
      {status === 'used' && <AiFillCheckCircle className='text-lime-400' />}
      {status === 'missed' && <AiFillCloseCircle className='text-orange-400' />}
      {status === 'unused' && <BiBlock className='text-gray-400' />}
      {amount} {unit && `${unit} of`} {name}
    </div>
  )
}
