import { createContext,useReducer} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import BookingSuccess from "./pages/success/BookingSuccess";
import { intialState, reducer } from "./Reducer/reducer";

export const userContext = createContext();

function App() {

  const [state,dispatch] = useReducer(reducer,intialState)
   
  return (
    <BrowserRouter>
    <userContext.Provider value={{state,dispatch}} >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/success" element={<BookingSuccess/>}/>
      </Routes>
    </userContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;
