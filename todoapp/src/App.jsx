import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'



function App() {
  const [data, setData] = useState("")


  return (
    <>
      <h2 className='bg-[#D0A2F7] shadow-2xl text-center text-black text-2xl py-3 font-bold'>TO-DO APP  {data}</h2>
     <div className='w-full flex justify-center items-center '>
      <Form/>
     </div>
    </>
  )
}

export default App
