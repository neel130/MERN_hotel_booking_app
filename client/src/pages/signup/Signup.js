import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div style={{marginTop:"70px"}} className='container'>
    
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">SignUp</button>
  <div id="emailHelp" class="form-text">Already User Login<Link to={'/login'}> Click Here </Link> </div>
</form>
    
    
    </div>
  )
}

export default Signup