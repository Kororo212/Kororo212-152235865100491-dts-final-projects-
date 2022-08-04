import { async } from "@firebase/util";
import { useSlider } from "@mui/base";
import {  createAsyncThunk, createSlice, current, isRejected, unwrapResult } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { auth, GAuth,GitAuth } from "../Config/Firebase";



export const userRegister = createAsyncThunk(
    'user/regist',
    async(data,{rejectWithValue})=>{
        try{
            const user = await createUserWithEmailAndPassword(auth,data.email,data.password)
            .then((res)=>{
                useNavigate('/')
                 return res.user
             })
            }
            catch(err){
               return rejectWithValue(err.code)
            }
    }
)
export const gitLogin = createAsyncThunk(
    'user/github',
    async({rejectWithValue})=>{
        try{
            const [user] = await signInWithPopup(auth,GitAuth)
            .then((res)=>{
               useNavigate('/')
               return res
            })
        }catch(err){
            return rejectWithValue(err.code)
        }
    }
)
export const userLogin =createAsyncThunk(
    'user/login',
    async(data,{rejectWithValue})=>{
        
        try{
            const user = await signInWithEmailAndPassword(auth,data.email,data.password)
            .then((res)=>{
                useNavigate('/')
                 return res.user
             })
            }
            catch(err){
               return rejectWithValue(err.code)
            }

    }

       
)
export const UserSlice = createSlice({
    name: 'user',
    initialState:{
        Loading:false,
        Err:null,
        UserName:null,
        UserEmail:null,
        Uid:null,
        
    },
    reducers:{
        ActiveUser: (state,action)=>{
           return {...state,Err:null,
            UserName:action.payload.userName,
            UserEmail:action.payload.userEmail,
            Uid:action.payload.uid
        }
        },Error:(state,action)=>{
           return {...state,Err:action.payload}
        },
        userLogout:state=>{
            state.UserName = null
            state.UserEmail= null
        },
        ChangeName :(state,action)=>{
            state.UserName = action.payload.userName
        }
    },
   extraReducers:(builder)=>{
    builder
    .addCase(userLogin.rejected,(state,action)=>{
        return {...state,Err:action.payload}
    })
    .addCase(userRegister.rejected,(state,action)=>{
        return{...state,Err:action.payload}
    })
   }
     
        


    

})

export const{ActiveUser,userLogout,ChangeName,Error}= UserSlice.actions
export const SelUserName = state =>state.user.UserName
export const SelUserEmail = state =>state.user.UserEmail
export const SelUser = state =>state.user.User
export const Err = state => state.user.Err

export default UserSlice.reducer