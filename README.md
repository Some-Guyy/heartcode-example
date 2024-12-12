# Heartcode Example

An example web app about raising drug awareness. [Deployed](https://heartcode-example.vercel.app/) on Vercel.

The app was made during the [Project Heartcode](https://heartcode.scis.smu.edu.sg/) 2024 mentor training on learning how to build a [Next.js](https://nextjs.org/) web app with UI libraries such as [shadcn](https://ui.shadcn.com/) and [Aceternity UI](https://ui.aceternity.com), and functional libraries such as [Clerk](https://clerk.com), as well as how to deploy on [Vercel](https://vercel.com/) and use their database. 

## Setup
### Prerequisites:
- [Node.js](https://nodejs.org/en/) v20.15.0 (_or above_)
- [Clerk](https://dashboard.clerk.com/sign-up) account set up (_you may need to sign up for an account_)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) set up with your project (_you will need to integrate this project into vercel_)
- An `.env` file in the root directory with these variables. Values in the `<>` have to be filled in based on your own account configuration:
    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_key>
    CLERK_SECRET_KEY=<your_key>
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    POSTGRES_URL=<your_url>
    POSTGRES_PRISMA_URL=<your_url>
    POSTGRES_URL_NO_SSL=<your_url>
    POSTGRES_URL_NON_POOLING=<your_url>
    POSTGRES_USER=<your_db_username>
    POSTGRES_HOST=<your_db_host>
    POSTGRES_PASSWORD=<your_db_password>
    POSTGRES_DATABASE=<your_db_name>
    ```

### Running the app:
1. Install all dependencies in the root directory of the app.

    `$ npm install`
1. Build the app.

    `$ npm run build`
1. Run the app server. It will be on http://localhost:3000 by default.

    `$ npm run start`
