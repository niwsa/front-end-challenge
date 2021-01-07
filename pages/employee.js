import { useState } from "react";
import Shell from "components/Shell";
import styles from "styles/Employee.module.css";
import { addOrUpdateEmployeeRecord } from "lib/api";

export default function Employee() {
  const [formState, setFormState] = useState({});

  function handleChange(e) {
    const {
      target: { name, type, value },
    } = e;
    setFormState((curState) => ({ ...curState, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    addOrUpdateEmployeeRecord(formState);
  }

  return (
    <Shell>
      <section className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Add a new employee</h2>
          <span className="meta">
            Fill out the information of your new employee.
          </span>
        </header>
        <form className={styles.form} onSubmit={onSubmit}>
          <div>
            <div className="flex col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Jane Doe"
                autoComplete="off"
                value={formState.name || ""}
                onChange={handleChange}
              ></input>
              <div className="meta">First and last names</div>
            </div>
            <div className="flex col">
              <label htmlFor="dob">Birthdate</label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="e.g. 17/02/1990"
                autoComplete="off"
                value={formState.dob || ""}
                onChange={handleChange}
              ></input>
              <div className="meta">DD/MM/YYYY</div>
            </div>
            <div className="flex col">
              <label htmlFor="jobTitle">Job title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                placeholder="e.g. Product manager"
                autoComplete="off"
                value={formState.jobTitle || ""}
                onChange={handleChange}
              ></input>
              <div className="meta">What is their role?</div>
            </div>
            <div className="flex col">
              <label htmlFor="country" id="country">
                Country
              </label>
              <div className="select">
                <select
                  id="country"
                  name="country"
                  value={formState.country || ""}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="Portugal">Portugal</option>
                </select>
              </div>
              <div className="meta">Where are they based?</div>
            </div>
            <div className="flex col">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                id="salary"
                name="salary"
                placeholder="e.g. 50000"
                autoComplete="off"
                value={formState.salary || ""}
                onChange={handleChange}
              ></input>
              <div className="meta">Gross yearly salary</div>
            </div>
          </div>
          <div className={`flex al-ctr just-ctr ${styles.ctrls}`}>
            <button type="button" className="btnSec">
              Cancel
            </button>
            <button type="submit">Add employee</button>
          </div>
        </form>
      </section>
    </Shell>
  );
}
