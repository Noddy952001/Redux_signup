import React, { useEffect } from "react";
import { useState  } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { Email, email , Password, password , Success, success } from "../Redux/Action";
import { store } from "../Redux/Store";
import axios from "axios"
import {useNavigate} from "react-router-dom"


export const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email ,setEmail] = useState("");
    const [token , setToken] = useState("");
    const [password , setPassword] = useState("")

    const useAuth = useSelector((store) => {
        store.isAuth
    })


    const handelSubmit = () => {
        let data = {
            email : "",
            password : ""
        }
    }
    dispatch(Email(email))
    dispatch(Password(password))

    axios.post("https://loginauthapi.herokuapp.com/login" ,data).then(function(res){
        setToken(true)

    }).then(function(res){
        dispatch(Success(token))
    })


    useEffect(() => {
        if(token == true){
            navigate("/product")
        
        }else{
            navigate("/login")
        }

    },[token])

    return(
        <div>
            <h1>Log-in</h1>
        
            <input type="text" 
                placeholder="Enter e-mail"
                onChange={(e) => {
                   setEmail(e.target.value)
                }}
            />
            <br />

            <input type="text" 
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword( e.target.value)
                }}
             />
             <br />


             <button
              onClick={handelSubmit}
             > Login</button>
        </div>
    )

}