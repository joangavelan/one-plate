import * as React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BiBlock } from 'react-icons/bi'
import { RecipeIngredient as TRecipeIngredient } from '../types'

type RecipeIngredientProps = {
  ingredients: TRecipeIngredient[]
}

export const RecipeIngredientList = ({ ingredients }: RecipeIngredientProps) => {
  return (
    <React.Fragment>
      {ingredients.map(({ id, amount, unit, name, status }) => (
        <div
          key={id}
          className='grid grid-cols-[auto_minmax(0,_1fr)] gap-1 [&>svg]:translate-y-[3px] [&>svg]:transform'
        >
          {status === 'used' && <AiFillCheckCircle className='text-lime-400' />}
          {status === 'missed' && <AiFillCloseCircle className='text-orange-400' />}
          {status === 'unused' && <BiBlock className='text-gray-400' />}
          {amount} {unit && `${unit} of`} {name}
        </div>
      ))}
    </React.Fragment>
  )
}
