import * as React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import ingredients from '@/data/ingredients.json'
import { UseFormRegisterReturn } from 'react-hook-form'

type Ingredient = {
  id: number
  name: string
}

type IngredientSearchProps = {
  registration: UseFormRegisterReturn
  query: string
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const IngredientSearch = ({
  query,
  registration,
  selected,
  setSelected
}: IngredientSearchProps) => {
  const filteredIngredients =
    query === ''
      ? ingredients.slice(0, 10)
      : ingredients
          .filter((ingredient) =>
            ingredient.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query?.toLowerCase().replace(/\s+/g, ''))
          )
          .slice(0, 10)

  return (
    <Combobox value={selected} onChange={setSelected} nullable>
      <div className='relative'>
        {/* input */}
        <Combobox.Input
          className='inputStyles leading-5 text-gray-900'
          displayValue={(ingredient: Ingredient) => ingredient?.name}
          placeholder='Apple'
          autoComplete='off'
          {...registration}
        />

        <Transition
          as={React.Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          // afterLeave={() => setQuery('')}
        >
          {/* options */}
          <Combobox.Options className='absolute z-10 mt-2 max-h-40 w-full min-w-min overflow-auto rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:max-h-52 sm:text-sm lg:max-h-60'>
            {filteredIngredients.length === 0 && query !== '' ? (
              // nothing found
              <div className='option text-gray-700'>Nothing found.</div>
            ) : (
              filteredIngredients.map((ingredient) => (
                // option
                <Combobox.Option
                  key={ingredient.id}
                  className={({ active }) =>
                    `option ${
                      active ? 'bg-lime-100 text-lime-900' : 'text-gray-900'
                    }`
                  }
                  value={ingredient}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {ingredient.name}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}
