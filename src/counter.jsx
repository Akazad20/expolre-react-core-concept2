import { useState } from "react"

 export default function Counter() {
     const [count,setcount]=useState(0);
    //  console.log(abc)

     const handladd=()=>{
         const newcount=count+1;
          setcount(newcount)
     }

      const handlesub=()=>{
             const newcount=count-1;
             setcount(newcount)
      }
    return (
        <div style={{border:'2px solid yellow'}}>
            <h2>counter: {count}</h2>
            <button onClick={handladd}>add</button>
            <button onClick={handlesub}>sub</button>
        </div>
    )
 }