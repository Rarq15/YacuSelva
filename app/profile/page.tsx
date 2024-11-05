'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function UserPage() {
  return <h1>Protegido</h1>;
});
