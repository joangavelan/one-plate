import React from 'react'
import { Ingredient } from '../../types'
import Image from 'next/image'
import { TbGripVertical } from 'react-icons/tb'
import { FiTrash2 } from 'react-icons/fi'

type IngredientProps = {
  ingredient: Ingredient
}

const Ingredient = ({ ingredient }: IngredientProps) => {
  const { name, amount, unit, image, nutrients, calories } = ingredient
  return (
    <div className='flex overflow-hidden rounded-lg bg-white shadow-sm'>
      {/* drag handler */}
      <div className='grid w-[2.5rem] cursor-pointer place-items-center md:w-[3.3rem] lg:w-[4.5rem]'>
        <TbGripVertical className='text-xl text-gray-700 md:text-2xl lg:text-3xl' />
      </div>

      {/* content */}
      <div className='flex flex-1 text-gray-700'>
        {/* image */}
        <div className='relative h-[2rem] w-[2rem] self-center md:h-[3rem] md:w-[3rem] lg:h-[4rem] lg:w-[4rem]'>
          <Image src={image} layout='fill' alt={name} />
        </div>

        {/* name & nutrients  */}
        <div className='ml-3.5 py-3 md:ml-4 md:py-5 lg:ml-6'>
          <h3 className='mb-0.5 text-xs font-semibold capitalize md:text-base lg:text-lg'>
            {name}{' '}
            <span className='inline-block normal-case '>
              ({amount} {unit})
            </span>
          </h3>
          <div className='flex flex-col justify-between text-xs md:text-sm lg:text-base'>
            {nutrients.map(({ name, amount, unit }) => (
              <div key={name} className='leading-[1.125rem] sm:leading-normal'>
                <h4 className='mr-2 inline-block'>{name}:</h4>
                <span className='font-medium'>
                  {amount} {unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* calories and serving */}
        <div className='ml-auto flex flex-col items-end justify-between'>
          <div className='badge rounded-l-lg rounded-t-none bg-yellow-200'>
            <span>{Math.round(calories.amount)}</span>
            <span>{calories.unit}</span>
          </div>
          <div className='cursor-pointer py-2.5 px-3.5 text-base transition-colors duration-300 hover:text-red-700 md:text-lg lg:text-xl'>
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredient
