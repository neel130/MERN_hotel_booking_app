import React,{useState,useEffect,useContext} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { userContext } from '../../App';


const Login = () => {
    const navigate = useNavigate();
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState(""); 
     const {state,dispatch} = useContext(userContext);
     const location = useLocation();
     console.log(location.state)

   const LogIN = async(e)=>{
    e.preventDefault();
    const res = await fetch('/auth/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });
    const data = await res.json();
    console.log(data)
    if(data.success){
      localStorage.setItem('user',JSON.stringify(data.user));
      dispatch({type:"USER",payload:data.user});
      if(location.state){
        navigate(-1)
      }else{
         navigate('/')
      }
     
    }
   }

  return (
    <div style={{marginTop:"70px"}} className='container'>
    
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
    onChange={(e)=>setEmail(e.target.value)}
    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input 
    onChange={(e)=>setPassword(e.target.value)}
    type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button onClick={LogIN} class="btn btn-primary">Login</button>
  <div id="emailHelp" class="form-text">New user create an Account <Link to={'/signup'}> Click Here </Link> </div>
</form>
    
    
    </div>
  )
}

export default Login