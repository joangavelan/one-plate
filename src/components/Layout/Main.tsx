import { Chart } from '@/features/chart'
import { Ingredients } from '@/features/ingredients'
import { Recipes } from '@/features/recipes'
import React from 'react'

export const Main = () => {
  return (
    <main className='my-5 grid flex-1 grid-cols-5 gap-8'>
      <Ingredients />
      <Chart />
      <Recipes />
    </main>
  )
}
