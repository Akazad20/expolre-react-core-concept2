import { useState } from "react"

 export default function Team() {

     const [team,setteam]=useState(11);

      const handleplayer=()=>{
         const newtplayer=team+1;
         setteam(newtplayer)
      }
       const removehanddel=()=>{
               const newtplayerex=team-1;
                setteam(newtplayerex)
       }

     const teamstyls={
         border:'1px solid red',
          margin:'10px',
          padding:'10px'
     }
      return (
        <div style={teamstyls}>
            <h2>players:{team}</h2>
            <button onClick={handleplayer}>team add</button>
            <button onClick={removehanddel}>remove</button>
        </div>
      )
 }