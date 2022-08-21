import { Content, Footer, Header, Main } from '@/components/Layout'
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
      <Content>
        <Header />
        <Main />
        <Footer />
      </Content>
    </>
  )
}

export default Home
