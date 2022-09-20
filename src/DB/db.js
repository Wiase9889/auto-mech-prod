import Localbase from "localbase";

// Creating a local Database for the application using Improved IndexedDB...
// This package mimics FIREBASE'S structure of storing documents but available locally using IndexedDB...

const db = new Localbase("auto-mech");

export const userAuth = [];

export default db;