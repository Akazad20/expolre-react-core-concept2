export default function Friend({friend}){
     console.log(friend)
    const { name,email}=friend
   
      return (
        <div className="box">
            <h2>name:{name} </h2>
            <p>email: {email} </p>
        </div>
      )
}