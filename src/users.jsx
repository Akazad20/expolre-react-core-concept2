import { useEffect, useState } from "react"

  export default function Users() {
    //data k paite hole aktha state rakhte hbe 
     const [user,setuser]=useState([]);
      useEffect( ()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
        .then(data=>setuser(data))

      }, [])    //const multi=()=>{} amon type ar funtion ta 1st a shot kore bosay si
     return (
        <div>
            <h2>user:{user.length}</h2>
        </div>
     )
  }