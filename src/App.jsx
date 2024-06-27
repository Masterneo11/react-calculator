// import { useState } from 'react'
import './App.css'
import Calculator from './Calculator'
export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <header>
        <h1>
          Simple Calculator
        </h1>
     </header>
     {/* <section className='aa'> */}
      <Calculator/>
    {/* </section> */}

     <footer>
      <p> Created by me</p>
     </footer>
    </>
  )
}


