import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/Layout';
import { connect } from 'react-redux';

const index = (props) => {

  return (
    <Layout>
      <Head>
        <title>My next jsx page</title>
      </Head>
      <div className="container">
      <h1>DO APP {new Date().getFullYear()}</h1>

        <Link href="/register">
            <a><h2>Register</h2></a>
        </Link>
    </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  error: state.errors.globalError
})

export default connect(mapStateToProps, {})(index)
// export default index;
