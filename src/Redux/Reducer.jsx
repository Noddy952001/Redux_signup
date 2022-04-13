import {Email,Password,Loading,Success,Error} from "./Action"

const initial_state = {
    email: "",
    password : "",
    loading:false,
    isAuth:false,
    token:"",
    error:false
}

export const reducer = (store =initial_state,{type: payload }) => {
    switch(type){
        case Email:
            return ({...store , email : payload})
        case Password : 
            return ({...store , password:payload})
        case Loading :
            return ({...store , loading:true})    
        case Success : 
            return ({...store , token:payload ,loading:false,isAuth:true})
        case Error : 
            return  ({...store , error:true})

            default :
                return store
            
    }
}

