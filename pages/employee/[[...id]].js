import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Shell from "components/Shell";
import styles from "styles/Employee.module.css";
import { addOrUpdateEmployeeRecord, loadEmplRecord } from "lib/api";

export default function Employee() {
  const router = useRouter();
  const { id: empId } = router.query;

  //  IS EDIT MODE
  const editMode = !!empId?.[0]; // check if an id is passed via path param

  // FETCH CUR RECORD OF EMPLOYEE TO EDIT IN EDIT MODE

  async function loadEmployee(empId) {
    const record = await loadEmplRecord(empId);
    if (record) {
      setFormState(record);
    }
  }

  useEffect(() => {
    if (editMode) {
      loadEmployee(empId[0]);
    }
  }, [editMode, empId]);

  // FORM LOGIC
  const formInitialState = {
    name: "",
    dob: "",
    jobTitle: "",
    country: "",
    salary: "",
  };
  const [formState, setFormState] = useState(formInitialState);

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;
    setFormState((curState) => ({ ...curState, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    addOrUpdateEmployeeRecord(formState);
    router.push("/");
  }

  return (
    <Shell>
      <section className={`h100 ${styles.container}`}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            {editMode ? "Edit employee" : "Add a new employee"}
          </h2>
          <span className="meta">
            {editMode
              ? "Edit the information of your employee"
              : "Fill out the information of your new employee."}
          </span>
        </header>
        <form className={`${styles.form}`} onSubmit={onSubmit}>
          <div>
            <div className="flex col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                id="name"
                name="name"
                placeholder="e.g. Jane Doe"
                autoComplete="off"
                value={formState.name}
                onChange={handleChange}
              ></input>
              <div className="meta">First and last names</div>
            </div>
            <div className="flex col">
              <label htmlFor="dob">Birthdate</label>
              <input
                type="text"
                required
                id="dob"
                name="dob"
                placeholder="e.g. 17/02/1990"
                autoComplete="off"
                value={formState.dob}
                onChange={handleChange}
              ></input>
              <div className="meta">DD/MM/YYYY</div>
            </div>
            <div className="flex col">
              <label htmlFor="jobTitle">Job title</label>
              <input
                type="text"
                required
                id="jobTitle"
                name="jobTitle"
                placeholder="e.g. Product manager"
                autoComplete="off"
                value={formState.jobTitle}
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
                  required
                  id="country"
                  name="country"
                  value={formState.country}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="Portugal">Portugal</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className="meta">Where are they based?</div>
            </div>
            <div className="flex col">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                required
                id="salary"
                name="salary"
                placeholder="e.g. 50000"
                autoComplete="off"
                value={formState.salary}
                onChange={handleChange}
              ></input>
              <div className="meta">Gross yearly salary</div>
            </div>
          </div>
          <div className={`flex al-ctr just-ctr ${styles.ctrls}`}>
            <button
              type="button"
              className="btnSec"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
            <button type="submit">{editMode ? "Save" : "Add employee"}</button>
          </div>
        </form>
      </section>
    </Shell>
  );
}
