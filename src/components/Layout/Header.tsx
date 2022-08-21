import React from 'react'
import { Github, Headline } from '../Elements'

export const Header = () => {
  return (
    <header className='flex w-full items-center justify-between'>
      <Headline />
      <Github />
    </header>
  )
}
