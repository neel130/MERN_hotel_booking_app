import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { userContext } from "../../App"
import "./navbar.css"

const Navbar = () => {
  const { state, dispatch } = useContext(userContext)
  console.log(state)
  console.log(document.cookie)

  const LogOut = async()=>{
    const res = await fetch('/auth/logout');
    const data = await res.json();
    console.log(data)
    localStorage.clear();
    dispatch({type:"LOGOUT"})
  }


  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Neelbooking</span>
        { state?.user ? 
        <>
        <div className="profile">
        
          </div> 
          
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
           
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item" to={'/profile'} >Profile</Link></li>
    <li><button onClick={LogOut} style={{marginLeft:"12px",marginTop:"10px"}} className="btn btn-danger"> logout </button></li>
  </ul>
</div>
          
        </>  
          :

         <div className="navItems">
          <button className="navButton"><Link style={{ textDecoration: "none", color: "black" }} to={'/signup'} >Register </Link> </button>
          <button className="navButton"> <Link style={{ textDecoration: "none", color: "black" }} to={'/login'}> Login</Link></button>
          
        </div>
        }
        
        
      </div>
    </div>
  )
}

export default Navbar