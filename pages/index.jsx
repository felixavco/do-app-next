import Head from 'next/head';
import Link from 'next/link'
import './index.scss'

const index = () => {

  return (
    <div>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <title>My next jsx page</title>
      </Head>
      <h1>Index</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}

export default index
