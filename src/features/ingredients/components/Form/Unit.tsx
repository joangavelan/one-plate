import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsFillCaretDownFill } from 'react-icons/bs'

const unit = [
  { name: 'g' },
  { name: 'tablespoon' },
  { name: 'fullspoon' },
  { name: 'mg' },
  { name: 'kg' },
  { name: 'pounds' }
]

export const Unit = () => {
  const [selected, setSelected] = useState(unit[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative'>
        <Listbox.Button className='inputStyles flex items-center justify-between gap-2 bg-white'>
          <span>{selected?.name}</span>
          <BsFillCaretDownFill className='translate-y-[1.2px]' />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute z-10 mt-2 max-h-60 w-full min-w-min overflow-auto rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {unit.map((unit, unitIdx) => (
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
                      {unit.name}
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
