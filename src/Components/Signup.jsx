import React, { useState } from "react";
import axios from "axios"



export const Signup = () => {


    const [Email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [token , setToken ] = useState("")

    const handelSubmit = () => {
        let data = {
            user_email : "",
            user_password : ""
        }
        axios.post("https://loginauthapi.herokuapp.com/register" , data).then(function(res){
            console.log(res.data)
    
            setToken(res.data.Token)
        })
    }

        return (

            <div>
                <h1>Sign-up page </h1>

                <div>
                    <input type="text" 
                            placeholder="Enter E-mail"
                            onChange={(e) => {
                            setEmail(e.target.value)
                    }} /> 
                    <br />
                    <input type="text" 
                        placeholder="Enter pssword"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />  
                    <br />


                    <button
                        onClick={handelSubmit}
                    >Submit</button>

                </div>

            </div>
        )

}