import { useState } from 'react'
import './App.css'

function App() {

  const [firstName , setFirstName] = useState('Fatih');

  const [lastName , setLastName] = useState('Tas');

  const [names , setNames] = useState(['Fatih' , 'Esra' , 'Esma' , 'Osman' , 'Mehmet']);

  const [userInfo , setUserInfo] = useState({userName : 'fatihademtas' , password : 'Asdasdasd123'});

  let [show , setShow] = useState(false);

  const handleChange = () => {
    setLastName('Akaydin');
  };

  const [count , setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>

      <div>{firstName} {lastName}</div>
        <hr />
      <div>
        <button onClick={() => {
            setFirstName('Esra');
          }}>
            Change First Name
        </button>
      </div>
          <hr />
      <div>
        <button onClick={handleChange}>
          Change Last Name
        </button>
      </div>
          <hr />
      <div>
        {names.map((name , index)=>(
          <div key={index}>
            {index} : {name}
          </div>
        ))}
      </div>

        <hr />
      <div>
        {show ? <div>{userInfo.userName} {userInfo.password}</div> : <div>**********</div>}
      </div>

      <div>
        <button onClick={() => {
          setShow(true);
        }}>Click</button>
      </div>

      <hr />

      <div>
        <div>{count}</div>

        <div>
          <button onClick={increase}>Increase</button>
        </div>
      </div>
    </div>
  )
}

export default App
