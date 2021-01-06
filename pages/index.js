import Shell from "components/Shell";
import UserIcon from "components/svg/UserIcon";
import Head from "next/head";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <Shell>
      <Head>
        <title>People</title>
      </Head>
      <header className="flex al-base">
        <h2 className={styles.title}>People</h2>
        <span className="meta no-shrink">3 employees</span>
        <button type="button" className={`inl-flex al-ctr ${styles.addBtn}`}>
          <UserIcon aria-hidden="true" width="1rem" height="1rem" />
          <span>Add employee</span>
        </button>
      </header>
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
          <tr>
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
        </tbody>
      </table>
    </Shell>
  );
}
