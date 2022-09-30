import React,{useContext} from 'react'
import { userContext } from '../../App'

const BookingSuccess = () => {
    const {state,dispatch} = useContext(userContext)
    console.log(state)
   
    const calculateDays = (date1,date2)=>{
        // The number of milliseconds in one day
        const ONE_DAY = 1000 * 60 * 60 * 24;
        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1 - date2);
    
        // Convert back to days and return
        return Math.round(differenceMs / ONE_DAY);
      }
    
     const day = calculateDays(state.new_search.date?.endDate,state.new_search.date?.startDate);
 

  return (
    <div>
        <h1>Your Room Booking <span style={{color:"green"}} >Successful</span> for {day} Nights </h1>
    </div>
  )
}

export default BookingSuccess