import Shell from "components/Shell";
import UserIcon from "components/svg/UserIcon";
import { retrieveEmplRecords } from "lib/api";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "styles/Home.module.css";

export default function Home() {
  const [empls, setEmpls] = useState([]);

  async function loadEmployees() {
    const records = await retrieveEmplRecords();
    console.log(records);
    if (records) {
      setEmpls(records);
    }
  }
  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <Shell>
      <Head>
        <title>People</title>
      </Head>
      <header className="flex al-base">
        <h2 className={styles.title}>People</h2>
        <span className="meta no-shrink">3 employees</span>
        <Link href="/employee">
          <a className={`inl-flex al-ctr no-shrink linkBtn ${styles.addBtn}`}>
            <UserIcon aria-hidden="true" width="1rem" height="1rem" />
            <span>Add employee</span>
          </a>
        </Link>
      </header>
      <div style={{ overflowX: "auto" }}>
        <table className={styles.table}>
          <thead className={`meta ${styles.thead}`}>
            <tr>
              <th>EMPLOYEE</th>
              <th>JOB TITLE</th>
              <th>COUNTRY</th>
              <th>SALARY</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {empls.map(({ id, name, dob, jobTitle, country, salary }) => (
              <tr key={id}>
                <td className={styles.name}>
                  {name} <div className="meta">{dob}</div>
                </td>
                <td>{jobTitle}</td>
                <td>{country}</td>
                <td className={styles.sal}>
                  {salary} USD <span className="meta">per year</span>
                </td>
                <td>
                  <button type="button" className="btnSec">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td className={styles.name}>
                Ann Henry <div className="meta">04/12/1990</div>
              </td>
              <td>Product Manager</td>
              <td>United States</td>
              <td className={styles.sal}>
                60,000 USD <span className="meta">per year</span>
              </td>
              <td>
                <button type="button" className="btnSec">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.name}>
                Annette Williamson <div className="meta">20/04/1985</div>
              </td>
              <td>CEO</td>
              <td>United States</td>
              <td className={styles.sal}>
                60,000 USD <span className="meta">per year</span>
              </td>
              <td>
                <button type="button" className="btnSec">
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.name}>
                Philip Alexander <div className="meta">25/07/1989</div>
              </td>
              <td>Software engineer</td>
              <td>United States</td>
              <td className={styles.sal}>
                60,000 USD <span className="meta">per year</span>
              </td>
              <td>
                <button type="button" className="btnSec">
                  Edit
                </button>
              </td>
            </tr>
         */}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
