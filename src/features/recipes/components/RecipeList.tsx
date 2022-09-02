import * as React from 'react'
import Image from 'next/image'
import { MdOpenInNew } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { FcInfo } from 'react-icons/fc'
import { Popover, Transition } from '@headlessui/react'
import { RecipeIngredient } from './RecipeIngredient'
import { Recipe } from '../types'
import { formatMinutes } from '@/utils/formatMinutes'

type RecipeListProps = {
  recipes: Recipe[]
}

export const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <div className='flex flex-1 flex-col gap-5 overflow-y-auto'>
      {recipes.map(
        ({
          id,
          image,
          title,
          ingredients,
          readyInMinutes,
          spoonacularSourceUrl
        }) => (
          // recipe
          <article
            key={id}
            className='grid grid-cols-[auto_minmax(0,_1fr)_auto] gap-3 rounded-lg bg-white p-4 pr-6 shadow-sm'
          >
            {/* image  */}
            <div className='relative h-20 w-20 overflow-hidden rounded-lg ring ring-gray-200'>
              <Image src={image} objectFit='cover' layout='fill' alt={title} />
            </div>

            <div>
              {/* title */}
              <h4 className='mb-1.5 text-sm font-semibold leading-5 sm:text-base sm:font-medium sm:leading-normal'>
                {title}
              </h4>
              <div className='text-xs sm:text-sm'>
                {/* ingredients */}
                <Popover className='relative mb-1'>
                  <div>
                    <Popover.Button>
                      <FcInfo className='info-icon text-lime-500' />
                    </Popover.Button>
                    <span>Ingredients</span>
                  </div>
                  <Transition
                    as={React.Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 grid max-h-36 gap-1 overflow-y-auto rounded-lg border border-gray-200 bg-white p-3 shadow-lg'>
                      {ingredients.map(({ id, ...props }) => (
                        <RecipeIngredient key={id} {...props} />
                      ))}
                    </Popover.Panel>
                  </Transition>
                </Popover>
                {/* time to cook */}
                <div>
                  <IoMdTime className='info-icon' />
                  {formatMinutes(readyInMinutes)}
                </div>
              </div>
            </div>

            {/* link to go to recipe on new tab */}
            <a
              href={spoonacularSourceUrl}
              target='_blank'
              rel='noreferrer nopeener'
              className='self-start p-0.5'
            >
              <MdOpenInNew />
            </a>
          </article>
        )
      )}
    </div>
  )
}
