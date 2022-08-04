import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../Config/Firebase";


const UserLog = ({children,inLogin=true})=>{

 const [user] = useAuthState(auth)

 if(!user && inLogin){
    return children
 }if(user && inLogin === false){
    return children
 }
 else{
    return <Navigate to="/"/>
 }
}

export default UserLog