import Head from 'next/head'
import Header from '../components/header/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>All about NextJS ✨</title>
      </Head>
      <main>
        <Header />
      </main>
    </>
  )
}