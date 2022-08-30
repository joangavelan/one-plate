import React from 'react'
import { Ingredient } from '../../types'
import Image from 'next/image'
import { TbGripVertical } from 'react-icons/tb'
import { FiTrash2 } from 'react-icons/fi'
import useIngredients from '@/stores/useIngredients'

type IngredientProps = {
  ingredient: Ingredient
}

const Ingredient = ({ ingredient }: IngredientProps) => {
  const { id, name, amount, unit, image, nutrients } = ingredient
  const calories = nutrients.find((nutrient) => nutrient.name === 'Calories')
  const removeIngredient = useIngredients((state) => state.removeIngredient)

  return (
    <div className='flex rounded-lg bg-white shadow-sm'>
      {/* drag handler */}
      <div className='grid w-[2.5rem] cursor-pointer place-items-center sm:w-[3.3rem] lg:w-[4.5rem]'>
        <TbGripVertical className='text-xl text-gray-700 sm:text-2xl lg:text-3xl' />
      </div>

      {/* content */}
      <div className='flex flex-1 text-gray-700'>
        {/* image */}
        <div className='relative h-[2rem] w-[2rem] self-center sm:h-[3rem] sm:w-[3rem] lg:h-[4rem] lg:w-[4rem]'>
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
            {nutrients
              .filter((nutrient) => nutrient.name !== 'Calories')
              .map(({ name, amount, unit }) => (
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
          <div className='badge rounded-bl-lg rounded-tr-lg bg-yellow-200'>
            <span>{Math.round(calories!.amount)}</span>
            <span>{calories!.unit}</span>
          </div>
          {/* remove icon */}
          <div
            onClick={() => removeIngredient(id)}
            className='cursor-pointer py-2.5 px-3.5 text-base transition-colors duration-300 hover:text-red-700 sm:text-lg lg:text-xl'
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredient
