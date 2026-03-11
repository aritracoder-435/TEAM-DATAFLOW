This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

The frontend expects a running backend API at `http://localhost:5000` during development, or you can point it at your deployed backend by setting `NEXT_PUBLIC_API_URL` (for example `https://team-dataflow.vercel.app`). The environment variable is stored in `.env.local`.

When you’re developing locally you can still start the server from the `backend` folder if needed:

```bash
cd ../backend
npm install          # first time only
node server.js        # or nodemon if you have it installed
```

Once the backend is running, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The front end hits the following API endpoints relative to `NEXT_PUBLIC_API_URL`:

- `GET /stats` – stats object
- `GET /activity` – weekly activity data
- `GET /nudge/next` – random nudge
- `GET /ai/recommendation` – simple AI suggestion
- `POST /session/start` and `/session/finish` – log focus sessions

Change these paths accordingly if you adapt the backend.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
