import { AiFillGithub } from 'react-icons/ai'

export const Github = () => {
  return (
    <div>
      <a
        href='https://github.com/joangavelan/one-plate'
        target='_blank'
        rel='nopeener noreferrer'
      >
        <AiFillGithub className='text-2xl text-slate-900 sm:text-3xl md:text-[2.4rem]' />
      </a>
    </div>
  )
}
