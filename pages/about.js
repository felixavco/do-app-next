import Head from 'next/head';
import Link from 'next/link'
import Template from '../components/Template';
import './index.scss';

const about = () => {

  return (
    <Template>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <title>My next jsx page</title>
      </Head>
      <h1>About</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Template>
  )
}

export default about