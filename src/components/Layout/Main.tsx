import { Chart } from '@/features/chart'
import { Ingredients } from '@/features/ingredients'
import { Recipes } from '@/features/recipes'
import React from 'react'

export const Main = () => {
  return (
    <main className='grid grid-cols-5 gap-4 md:gap-8 lg:auto-rows-fr'>
      <Ingredients />
      <Chart />
      <Recipes />
    </main>
  )
}
