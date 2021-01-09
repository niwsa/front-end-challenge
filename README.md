## Toolchain

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run App

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

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## User story

When the app first loads an empty state is shown. Employees are added by clicking the `Add employee` link. Added employees show up in the main page table where there is a link for editing. On saving the forms are redirected back to home page.

## Routes

The app contains two routes one which shows the list of employees and other one is the form for adding/editing employee

- / &nbsp; ⚛️ [Home](pages/index.js)
- /employee (Add) and /employee/:id (Edit) &nbsp; ⚛️ [Employee](pages/employee/[[...id]].js)

## Database

Uses browser based Indexed DB for persisting data.

## Tests

Automated tests are in the [tests](tests/index.test.js) folder.

To execute the tests, first ensure that the development server is up and running, then run

```bash
npm run test
#or
yarn test
```

The tests run in an headless browser by default, but to see it in action change [headless](tests/index.test.js#L11) on line 11 to false and comment out ` afterAll(async () => await browser.close());` on last line.

## IMPLEMENTATION NOTES

- The employee table is sorted based on creation time, last added appears on top.
- On smaller viewports the table will be showing scrollbars.
