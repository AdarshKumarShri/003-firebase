import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

function App() {

  const putData = ()=>{
    set(ref(db, 'users/adarsh'), {
      id : 1,
      name : "adarsh",
      age : 25
    })
  }

  return (
    <div className="App">
      <>
        <h1>firebase react app</h1>
        <button onClick={putData}>Put data</button>
      </>
    </div>
  );
}

export default App;
