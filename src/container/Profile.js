import React, { useEffect, useState } from "react";
import { auth } from "../Config/Firebase";
import { Box} from "@mui/system";
import TextField from '@mui/material/TextField';
import { Button, Container } from "@mui/material";
import { updateProfile } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { ActiveUser,userLogout, ChangeName, SelUserName } from "../Reducer/User";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";


const Profile =()=>{
    
    
    const [change,setChange] = useState(true);
    const [user] = useAuthState(auth)
    const name = useSelector(SelUserName)
    const dispatch = useDispatch()
   
  
    const test=async(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const displayName = data.get('displayName')
        
        await updateProfile(user, {displayName:displayName})
        .finally(()=> window.alert('update success'))
        .catch((err)=>{
            alert('Something Wrong')
        })
        setChange(true)
        window.location.reload()
    }
   
   



    return(
        <Container maxWidth="xs" sx={{minHeight:'100vh'}}>
            <Box sx={{marginTop:'100px'}}>

               
                {change?
                <Box sx={{textAlign:'center'}}>
                    <h3>{name? name : 'Account'}</h3>
                    <Button onClick={()=>{setChange(false)} }>Change Name</Button>
                
                </Box>
                :
                <Box component="form" onSubmit={test} sx={{display:'flex',flexDirection:'column'}}>
                   
                   <TextField
                       margin="normal"
                       required
                       size="medium"
                       id="displayName"
                       label="Username"
                       name="displayName"
                       autoComplete="displayName"
                       autoFocus
                       
                   />
                   <Button type={"submit"}>Change</Button>

                </Box>}
            </Box>
            </Container>

                
           
    )
}

export default Profile;