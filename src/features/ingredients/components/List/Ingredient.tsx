import * as React from 'react'
import { Ingredient } from '../../types'
import Image from 'next/image'
import { TbGripVertical } from 'react-icons/tb'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import useIngredients from '@/stores/useIngredients'
import type { DraggableProvided } from 'react-beautiful-dnd'

type IngredientProps = {
  ingredient: Ingredient
  provided: DraggableProvided
}

const Ingredient = ({ ingredient, provided }: IngredientProps) => {
  const { id, name, amount, unit, image, nutrients, calories } = ingredient
  const removeIngredient = useIngredients((state) => state.removeIngredient)

  return (
    <li
      className='my-1.5 flex rounded-lg bg-white shadow-sm'
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      {/* drag handler */}
      <div
        {...provided.dragHandleProps}
        className='grid w-[2.5rem] place-items-center sm:w-[3.3rem] lg:w-[4.5rem]'
      >
        <TbGripVertical className='text-xl text-gray-700 sm:text-2xl lg:text-3xl' />
      </div>

      {/* content */}
      <div className='flex flex-1 text-gray-700'>
        {/* image */}
        <div className='pointer-events-none relative h-[2rem] w-[2rem] select-none self-center sm:h-[3rem] sm:w-[3rem] lg:h-[4rem] lg:w-[4rem]'>
          <Image src={image} layout='fill' alt={name} />
        </div>

        {/* name, amount & nutrients  */}
        <div className='ml-3.5 py-3 sm:ml-4 sm:py-5 lg:ml-6'>
          <h3 className='mb-1 text-sm font-semibold capitalize sm:text-base lg:text-lg'>
            {/* name */}
            <span className='mr-1'>{name}</span>
            {/* amount */}
            <span className='inline-block normal-case'>
              ({amount} {unit})
            </span>
          </h3>
          {/* nutrients */}
          <div className='flex flex-col justify-between'>
            {nutrients.map(({ name, amount, unit }) => (
              <div
                key={name}
                className='text-xs leading-[1.125rem] sm:text-sm sm:leading-normal lg:text-base'
              >
                <h4 className='mr-1 inline-block'>{name}:</h4>
                <span className='font-medium'>
                  {amount} {unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='ml-auto flex flex-col items-end justify-between'>
          {/* calories */}
          <span className='badge rounded-bl-lg rounded-tr-lg bg-yellow-200'>
            {calories} kcal
          </span>
          {/* remove ingredient icon */}
          <div
            onClick={() => removeIngredient(id)}
            className='cursor-pointer py-3 px-3.5 text-base transition-colors duration-300 hover:text-red-700 sm:text-lg lg:text-xl'
          >
            <IoMdRemoveCircleOutline />
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ingredient
