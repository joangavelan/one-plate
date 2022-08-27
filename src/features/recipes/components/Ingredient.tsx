import React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BiBlock } from 'react-icons/bi'
import { BaseEntity } from '@/types'

export type IngredientStatus = 'used' | 'unused' | 'missed'

export type RecipeIngredient = {
  id: number
  status: IngredientStatus
} & BaseEntity

type RecipeIngredientProps = Omit<RecipeIngredient, 'id'>

export const Ingredient = ({
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
