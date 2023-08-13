import Head from 'next/head';
import { withAuth } from '../lib/withAuth';
import UserList from '../components/UserList';

function Users() {
    return (
        <>
            <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <UserList />
        </>
  )
}
export default withAuth(Users);