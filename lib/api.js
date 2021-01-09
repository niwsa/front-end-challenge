import { nanoid } from "nanoid";
import { Store, set, get, keys } from "idb-keyval";

function storeHandle() {
  const store = new Store("front-end-challenge", "employee");
  return store;
}

export async function addOrUpdateEmployeeRecord(empRecord) {
  try {
    let id, createdAt;
    if (!empRecord.id) {
      id = nanoid();
      createdAt = Date.now();
    } else {
      id = empRecord.id;
      createdAt = empRecord.createdAt;
    }
    await set(id, { id, createdAt, ...empRecord }, storeHandle());
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

export async function loadEmplRecord(empId) {
  try {
    const empRec = await get(empId, storeHandle());
    return empRec;
  } catch (err) {
    console.error(`Error in retrieving employee record ->`, err);
  }
}
