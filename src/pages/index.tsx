import Header from '@/components/Layout/Header'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      {/* head */}
      <Head>
        <title>One Plate</title>
        <meta name='description' content='Craft your perfect meal' />
        <link rel='icon' href='/salad.png' />
      </Head>

      {/* content */}
      <div className='mx-auto max-w-[90rem] py-10 px-4'>
        <Header />
      </div>
    </>
  )
}

export default Home
