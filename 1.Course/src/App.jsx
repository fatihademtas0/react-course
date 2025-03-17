import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let a = 15;

  const firstName = 'Esra';

  let names = [
    'Esra',
    'Fatih',
    'Osman',
    'Mehmet'
  ];

  return (
    <div>
      <p>Value of a:  {a}</p>
      <p>Customers Name:  {firstName}</p>


      {
        names.map((name , index)=>(
          <div key={index} style={{
            backgroundColor: 'green',
            border: '1px solid black'
          }}>
            {index+1} : {name}
          </div>   
        ))
      }
    </div>
  )
}

export default App
