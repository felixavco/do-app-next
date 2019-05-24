import Head from 'next/head';
import Layout from '../components/Layout';
import { connect } from 'react-redux';

const index = (props) => {

  return (
    <Layout>
      <Head>
        <title>My next jsx page</title>
      </Head>
      <h1>DO APP {new Date().getFullYear()}</h1>

      <h2>Error: {props.error}</h2>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  error: state.errors.globalError
})

export default connect(mapStateToProps, {})(index)
// export default index;
