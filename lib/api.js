import { nanoid } from "nanoid";
import { Store, set, get, keys } from "idb-keyval";

function storeHandle() {
  const store = new Store("front-end-challenge", "employee");
  return store;
}

export async function addOrUpdateEmployeeRecord(empRecord, callback) {
  try {
    let id;
    if (!empRecord.id) {
      id = nanoid();
    } else {
      id = empRecord.id;
    }
    await set(id, { id, ...empRecord }, storeHandle());
    typeof callback === "function" && callback();
  } catch (err) {
    console.error(`Error in saving employee ->`, err);
  }
}

export async function retrieveEmplRecords() {
  try {
    const emps = [];
    const empIds = await keys(storeHandle());
    for (const empId of empIds) {
      const emp = await get(empId, storeHandle());
      emps.push(emp);
    }
    return emps;
  } catch (err) {
    console.error(`Error in retrieving employees ->`, err);
  }
}
