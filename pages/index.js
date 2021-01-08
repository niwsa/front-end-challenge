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
        {empls.length ? (
          <span className="meta">{empls.length} employees</span>
        ) : null}
        <Link href="/employee">
          <a className={`inl-flex al-ctr no-shrink linkBtn ${styles.addBtn}`}>
            <UserIcon aria-hidden="true" width="1em" height="1em" />
            <span>Add employee</span>
          </a>
        </Link>
      </header>
      <div className={styles.tableOvflw}>
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
                  <Link href={`/employee/${id}`}>
                    <a className={`linkBtn btnSec`}>Edit</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
