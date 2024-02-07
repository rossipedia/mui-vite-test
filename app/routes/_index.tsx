import * as React from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Link as RemixLink } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import { ClientOnly } from 'remix-utils/client-only';
import Link from '@mui/material/Link';

// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: 'Remix Starter' },
  { name: 'description', content: 'Welcome to remix!' },
];

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  return (
    <React.Fragment>
      {/*
      If uncommented then SSR blows up because this is an object with a
      "default" property, as opposed to the actual default export of
      `@mui/material/Typography`
      */}

      {/*
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Material UI Remix in TypeScript example
      </Typography>
      */}

      {/*
      However a client-only component works fine.
      */}
      <ClientOnly>
        {() => (
          <>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              Material UI Remix in TypeScript example
            </Typography>
            <Link to="/about" color="secondary" component={RemixLink}>
              Go to the about page
            </Link>
          </>
        )}
      </ClientOnly>
    </React.Fragment>
  );
}
