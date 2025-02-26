"use client";
export const openDB = (dbName, storeName) => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const addData = async (dbName, storeName, data) => {
  const db = await openDB(dbName, storeName);
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.add(data);
  return tx.complete;
};

export const getAllData = async (dbName, storeName) => {
  return new Promise(async (resolve, reject) => {
    const db = await openDB(dbName, storeName);
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const deleteData = async (dbName, storeName, id) => {
  const db = await openDB(dbName, storeName);
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  store.delete(id);
  return tx.complete;
};
