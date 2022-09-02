const technologies = [
  {
    name: 'Headless UI',
    href: 'https://headlessui.com/'
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/'
  },
  {
    name: 'React Beautiful DND',
    href: 'https://github.com/atlassian/react-beautiful-dnd'
  },
  {
    name: 'Chart.js',
    href: 'https://www.chartjs.org/'
  }
]

export const Footer = () => {
  return (
    <footer className='text-center text-sm font-semibold text-gray-400 md:text-base'>
      Built with{' '}
      {technologies.map(({ name, href }) => (
        <span key={name} className='[&:not(:last-child)]:mr-1'>
          <a
            href={href}
            target='_blank'
            rel='noreferrer noopener'
            className='text-gray-700 hover:underline'
          >
            {name},
          </a>
        </span>
      ))}{' '}
      and more!
    </footer>
  )
}
