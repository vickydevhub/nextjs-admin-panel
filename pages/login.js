import Head from 'next/head';
import Signin from '../components/Signin';

export default function Login() {
    return (
        <>
            <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Signin />
        </>
  )
}
