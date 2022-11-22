import * as React from 'react'
import { Chart as ChartJS, ArcElement, ChartData, Tooltip } from 'chart.js'
import { Heading } from './Heading'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Graph } from './Graph'
import { Legend } from './Legend'
import useIngredients from '@/stores/useIngredients'
import { getKeyValues } from '@/utils/getKeyValues'
import { sumAndMergeArrayValues } from '@/utils/sumAndMergeArrayValues'
import { NoData } from './NoData'

ChartJS.register(ArcElement, Tooltip, ChartDataLabels)

export const Chart = () => {
  const ingredients = useIngredients((state) => state.ingredients)

  const totalAmountsPerNutrient = React.useMemo(
    () =>
      ingredients.reduce((acc, ing) => {
        const amountsPerNutrient = getKeyValues(ing.nutrients, 'amount')
        return sumAndMergeArrayValues(acc, amountsPerNutrient)
      }, [] as number[]),
    [ingredients]
  )

  console.log(totalAmountsPerNutrient)

  const totalCalories = React.useMemo(
    () =>
      ingredients.reduce((acc, ing) => {
        return acc + ing.calories
      }, 0),
    [ingredients]
  )

  const data: ChartData<'pie'> = React.useMemo(
    () => ({
      labels: ['Fats', 'Proteins', 'Carbohydrates'],
      datasets: [
        {
          data: totalAmountsPerNutrient,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }
      ]
    }),
    [totalAmountsPerNutrient]
  )

  return (
    <>
      {ingredients.length > 0 ? (
        <div className='green-box relative col-span-5 grid grid-rows-[auto,minmax(0,_1fr),auto] gap-5 lg:col-span-2'>
          <Heading totalCalories={totalCalories} />
          <Graph data={data} />
          <Legend data={data} />
        </div>
      ) : (
        <NoData />
      )}
    </>
  )
}
