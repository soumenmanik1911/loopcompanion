# Joy - Next.js App with Clerk Authentication

This is a Next.js application with Clerk authentication integration using the App Router approach.

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in `.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- User authentication with Clerk
- Sign-in and sign-up pages
- Protected routes
- User profile page
- Dashboard for authenticated users

## Authentication Flow

- The application uses Clerk for authentication
- The middleware protects specified routes
- The `<ClerkProvider>` wraps the application in `app/layout.tsx`
- Sign-in and sign-up components are provided by Clerk
- Protected routes check for authentication using Clerk's `auth()` function

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
