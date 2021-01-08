## Toolchain

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

Install packages

```bash
npm run install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## User story

When the app first loads an empty state is shown from where employees can be added. Added employees are shown in the main page table.

## Routes

The app contains two routes one which shows the list of employees and other one is the form for adding/editing employee

- / &nbsp; ⚛️ [Home](pages/index.js)
- /employee (Add) and /employee/:id (Edit) &nbsp; ⚛️ [Employee](pages/employee/[[...id]].js)

## Database

Uses browser based Indexed DB for persisting data.
