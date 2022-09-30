import React,{useState,useEffect,useContext} from 'react'
import { userContext } from '../../App'

const Profile = () => {
   const {state,dispatch} = useContext(userContext);
   const [update,setUpdate] = useState(false)
   const [username,setUsername] = useState(state.user.username)



   const updateProfile = async() =>{
     const res = await fetch('/user/update/'+state.user._id,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username
      })
     });
     const data = await res.json();
     console.log(data)
     if(data.success){
      localStorage.setItem("user",JSON.stringify(data.updateuser))
      dispatch({type:"UPDATE_USER",payload:data.updateuser})
      setUpdate(false)
     }
   }
   console.log(state.user)
  return (
    <div>



     <div style={{marginTop:"70px"}} className="container">
      { update ?
       <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" /> :

       <>
        <h1>{state.user.username}</h1> <span><svg onClick={()=>setUpdate(true)}  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg> </span>
      </>
      } 
    
  
      <h3>{state.user.email}</h3>

    { update ?  <button onClick={updateProfile} className='btn btn-primary' > Update Profile  </button> : null } 
     </div>


    </div>
  )
}

export default Profile