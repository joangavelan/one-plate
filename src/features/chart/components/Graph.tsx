import { Pie } from 'react-chartjs-2'
import type { ChartOptions, ChartData } from 'chart.js'

const options: ChartOptions = {
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: ({ label, formattedValue }) => ` ${label}: ${formattedValue} g`
      }
    },
    datalabels: {
      display: 'auto',
      font: {
        size: 15,
        weight: 'bold'
      },
      color: '#3f3f46',
      formatter: (value) => (value ? value + 'g' : null)
    }
  },
  maintainAspectRatio: false
}

type GraphProps = {
  data: ChartData<'pie'>
}

export const Graph = ({ data }: GraphProps) => {
  return (
    <div className='min-w-0'>
      <Pie data={data} options={options} />
    </div>
  )
}
