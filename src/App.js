import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import SubmissionForm from "./SubmissionForm";

const firebaseConfig = {
  apiKey: "AIzaSyBfVOI0vBw5ho1-KRZWM1ktRCnTXDfaUiY",
	authDomain: "astro-documentation.firebaseapp.com",
	projectId: "astro-documentation",
	storageBucket: "astro-documentation.appspot.com",
	messagingSenderId: "751298331802",
	appId: "1:751298331802:web:4c7b5832a9d9ded83a8b23",
};

const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);

async function insertData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


function App() {
	return (
		<div className="App">
			{/* test<button onClick={() => insertData()}>add data</button> */}
      <SubmissionForm></SubmissionForm>
		</div>
	);
}

export default App;
