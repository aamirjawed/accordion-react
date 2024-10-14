/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */


// import './App.css'

import { useEffect, useState } from "react";
import Accordion from "./Accordion";

function App() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([null])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        setData(data)      
      } catch (error) {
        console.error(error)
      }
    }
  
    fetchData()
  }, [])

  const setVisible = (id) => {
    
    setSelected(id)

  }

  return (
    <div className="box">
    {data.map((val) => {
      return <Accordion val = {val} setVisible = {setVisible} selected = {selected}></Accordion>
    })}
    </div>
  )
}

export default App
