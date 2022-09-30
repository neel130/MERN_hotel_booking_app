const loggedinuser = JSON.parse(localStorage.getItem('user')) ;
export const intialState = {
    user:loggedinuser,
    new_search:{
        destination:undefined,
        dates:[],
        options:{
            adult:undefined,
            children:undefined,
            room:undefined
        }
    }
}

export const reducer = (state,action)=>{
    if(action.type==="USER"){
        return {
            ...state,
            user:action.payload
        }
    }

    if(action.type==="LOGOUT"){
        return null
    }

    if(action.type==="UPDATE_USER"){
        return{
            ...state,
           user:{
            ...state.user,
            username:action.payload.username,
            email:action.payload.email
           }
        }
    }

    if(action.type==="NEW_SEARCH"){
        return{
            ...state,
            new_search:action.payload
        }
    }

    return state ;
}