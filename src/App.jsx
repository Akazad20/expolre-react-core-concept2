import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'

function App() {

   function handleclick() {
      alert('this is click')
   }

    const handleclick2=()=>{
      alert('this clicke 2 core')
    }
 // four peramiter pass
     const bejiallafuntion=(num)=>{
       alert(num+5)
     }

  return (
    <>  
      
      <h1>React core concepts 2</h1>
           <Friends></Friends>
          <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleclick} >clicke me</button>
      <button onClick={handleclick2} >clicke 2</button>
      <button onClick={()=>{alert('this is thard way funtion')}} >third click</button>
      {/* jodi kono funtion ar vitore theke peramiter pass kore likhte hoi tahole funtion ta call korar somoy array funtion likhte hbe */}
      <button onClick={()=>bejiallafuntion(5)} ></button>
     
    </>
  )
}

export default App
