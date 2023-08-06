import Head from 'next/head';
import Signup from '../components/Signup';

export default function Register() {
    return (
        <>
            <Head>
            <title>Register</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Signup />
        </>
  )
}
