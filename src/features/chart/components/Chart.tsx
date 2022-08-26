import { Chart as ChartJS, ArcElement, ChartData } from 'chart.js'
import { Heading } from './Heading'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Graph } from './Graph'
import { Legend } from './Legend'

ChartJS.register(ArcElement)
ChartJS.register(ChartDataLabels)

const data: ChartData<'doughnut'> = {
  labels: ['Proteins', 'Carbohydrates', 'Fats'],
  datasets: [
    {
      data: [13, 12, 3],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ]
}

export const Chart = () => {
  return (
    <div className='green-box col-span-5 grid grid-rows-[auto,minmax(0,_1fr),auto] gap-5 lg:col-span-2'>
      <Heading />
      <Graph data={data} />
      <Legend data={data} />
    </div>
  )
}
