import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';


import { ActiveUser, Err, userLogin,Error} from '../Reducer/User';
import { auth, GAuth, GitAuth } from './Firebase';


const Login = () => {

    const navigate = useNavigate();
    const ErrMessage = useSelector(Err)
    const dispatch = useDispatch();



    const signWithGit= async()=>{
       await signInWithPopup(auth,GitAuth)
       .then((res)=>{
        dispatch(ActiveUser({userEmail:res.user.email,userName:res.user.displayName,uid:res.user.uid}))
    }).catch((err)=>{
        return dispatch(Error(err.code))
       })
    }    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        await dispatch(userLogin({email:email,password:password}))  
    };

    const singWithGoogle = async()=>{
        await signInWithPopup(auth,GAuth)
        .then((res)=>{
            dispatch(ActiveUser({userEmail:res.user.email,userName:res.user.displayName,uid:res.user.uid}))
        }).catch((error)=>{
           dispatch(Err(error.code))
        })
    }

    const handler = ()=>{
        dispatch(Err(null))
    }
   


    return (
        <Container component="main" maxWidth="xs" sx={{minHeight:'82vh'}}>
            <Box
                sx={{
                    mt: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            <Box sx={{display:'flex',minWidth:'400px',mt:1,justifyContent:'space-between'}}>
                    <Button variant='contained' sx={{backgroundColor:'blue'}} onClick={singWithGoogle} >Sign With Google</Button>
                    <Button variant='contained' sx={{backgroundColor:'black'}} onClick={signWithGit}>Sign With Github</Button>
                </Box>
                <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Typography color='red'>{ErrMessage}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
               
                    <Grid container>
                        <Grid item>
                            <Link to="/register" onClick={handler}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;