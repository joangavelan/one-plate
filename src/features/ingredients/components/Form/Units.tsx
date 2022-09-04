import * as React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useController, UseControllerProps } from 'react-hook-form'
import { FormData } from './Form'
import { Unit } from './Unit'

type UnitsProps = {
  units: string[]
  loadingUnits: boolean
}

export const Units = ({
  units,
  loadingUnits,
  ...props
}: UnitsProps & UseControllerProps<FormData>) => {
  const {
    field: { value, onChange }
  } = useController(props)

  return (
    <Listbox value={value} onChange={onChange} disabled={!units.length}>
      <div className='relative'>
        <Listbox.Button className='inputStyles flex h-full items-center justify-between gap-2 bg-white'>
          <Unit value={value} loadingUnits={loadingUnits} />
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute z-10 mt-2 max-h-60 w-full min-w-min overflow-auto rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {units.map((unit, unitIdx) => (
              <Listbox.Option
                key={unitIdx}
                className={({ active }) =>
                  `option relative cursor-default select-none ${
                    active ? 'bg-lime-100 text-green-900' : 'text-gray-900'
                  }`
                }
                value={unit}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {unit}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
