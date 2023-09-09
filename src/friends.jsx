import { useEffect, useState } from "react"
import './friend.css'
import Friend from "./friend";
 export default function Friends(){
     const [friends,setfried]=useState([])
     useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res=>res.json())
          .then(data=>setfried(data))
     }, [])
     return (
        <div className="box">
            <h2>friends:{friends.length}</h2>
          {
            friends.map(friend=> <Friend 
                friend={friend}></Friend>)
          }
        </div>
     )
 }