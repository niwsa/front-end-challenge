import puppeteer from "puppeteer";
import { getDocument, queries, waitFor } from "pptr-testing-library";
import empls from "./employeelist.json";
const { getByLabelText, getByRole, getByText, queryAllByRole } = queries;

describe("Employee Add", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true, //can be changed to false to see the test in action
      defaultViewport: null,
    });
    const pages = await browser.pages();
    page = pages[0];
    await page.goto("http://localhost:3000");
  });

  test("Add employees from employeelist.json and submit form", async () => {
    const $document = await getDocument(page);

    for (let emp of empls) {
      await waitFor(() =>
        getByRole($document, "link", { name: /add employee/i })
      );
      const $addEmp = await getByRole($document, "link", {
        name: /add employee/i,
      });
      await $addEmp.click();
      await waitFor(() =>
        getByRole($document, "heading", { name: /Add a new employee/i })
      );
      const $formSubmitBtn = await getByRole($document, "button", {
        name: /Add employee/i,
      });

      for (let label of Object.keys(emp)) {
        const field = await getByLabelText($document, label);
        await field.type(emp[label]);
      }
      await $formSubmitBtn.click();
    }
  });

  test("Verify employees added show up in home page", async () => {
    const $document = await getDocument(page);
    await waitFor(() => getByRole($document, "table"));
    const $table = await getByRole($document, "table");
    for (let emp of empls) {
      for (const [key, value] of Object.entries(emp)) {
        await getByText($table, value, {
          exact: key === "Salary" ? false : true,
        });
      }
    }
  });

  test("Edit an existing employee", async () => {
    const $document = await getDocument(page);
    await waitFor(() => getByRole($document, "table"));
    const $table = await getByRole($document, "table");
    const $firstEmpEditBtn = await queryAllByRole($table, "link");
    await $firstEmpEditBtn[0].click();
    await waitFor(() =>
      getByRole($document, "heading", { name: /Edit employee/i })
    );
    const $formSubmitBtn = await getByRole($document, "button", {
      name: /Save/i,
    });

    const jobField = await getByLabelText($document, "Job title");
    await page.evaluate(() => (document.getElementById("jobTitle").value = ""));
    await jobField.type("Rocket Scientist");
    await $formSubmitBtn.click();
  });

  test("Verify edited value", async () => {
    const $document = await getDocument(page);
    await waitFor(() => getByRole($document, "table"));
    const $table = await getByRole($document, "table");
    await getByText($table, "Rocket Scientist");
  });

  afterAll(async () => await browser.close());
});
