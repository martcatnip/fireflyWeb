import myfirebase from "./myfirebase";
import "firebase/firestore";

const db = myfirebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default db;
