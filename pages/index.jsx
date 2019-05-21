import Head from 'next/head';
import Link from 'next/link'
import Template from '../components/Template';
import './index.scss'

const index = () => {

  return (
    <Template>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <title>My next jsx page</title>
      </Head>
      <h1>DO APP {new Date().getFullYear()}</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Template>
  )
}

export default index
