import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export function withAuth(Component) {
  return function WithAuth(props) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    if (!session) {
      router.replace('/login'); // Redirect to login page if not logged in
      return null;
    }

    return <Component {...props} />;
  };
}