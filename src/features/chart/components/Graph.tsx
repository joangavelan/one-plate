import { Doughnut } from 'react-chartjs-2'
import type { ChartOptions, ChartData } from 'chart.js'

const options: ChartOptions = {
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
    datalabels: {
      font: {
        size: 15,
        weight: 'bold'
      },
      color: '#4b5563',
      formatter: (value) => value + 'g'
    }
  },
  maintainAspectRatio: false
}

type GraphProps = {
  data: ChartData<'doughnut'>
}

export const Graph = ({ data }: GraphProps) => {
  return (
    <div className='min-w-0'>
      <Doughnut data={data} options={options} />
    </div>
  )
}
