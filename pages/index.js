import Head from 'next/head';
import Link from 'next/link'
import Template from '../components/Template';
import './index.scss'
import { connect } from 'react-redux';

const index = (props) => {

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
      <h2>Error: {props.error}</h2>
    </Template>
  )
}

const mapStateToProps = (state) => ({
  error: state.errors.globalError
})

export default connect(mapStateToProps, {})(index)
// export default index;
