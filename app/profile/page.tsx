import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(
  async function UserPage() {
    return <h1>Protegido</h1>;
  },
  {
    returnTo: '/profile',
  }
);
