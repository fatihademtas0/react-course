import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName , setFirstName] = useState("");

  const [lastName , setLastName] = useState("");


  useEffect(() => {
    console.log("Always running.")
  });

  useEffect(() => {
    console.log("Running when first rendering.")
  }
  , []);

  useEffect(() => {
    console.log("Running when firstName changes and when first rendering.")
  }
  , [firstName]);

  useEffect(() => {
    console.log("Running when lastName changes and when first rendering.")
  }
  , [lastName]);

  return (
    <div>
      
      <div>
        <button onClick={() => setFirstName('Fatih')}>Change First Name</button>
      </div>
      <hr />
      <div>
        <button onClick={() => setLastName('Tas')}>Change Last Name</button>
      </div>

    </div>
  )
}

export default App
