import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import List from "./List";
import { Searched, SearchD, Loading } from "../Reducer/DataGame";
import { useSelector,useDispatch } from "react-redux";
import DisplayLoad from "./Loading";


export const Search =()=>{
   let params = useParams();
   


   const dataGame = useSelector(SearchD);
   const dispatch = useDispatch();

   const Load = useSelector(Loading)

   
  
   useEffect(()=>{
     dispatch(Searched(params?.slug))
   },[params])


   return (
    <div style={{minHeight: '100vh'}}>
      {Load? <DisplayLoad/> :  
      <>
      <div style={{textAlign:'center'}}>
      <h5 style={{marginTop:'100px'}}>Search: {params?.slug.replace('-',' ')}</h5>
      </div>
      <div style={{marginTop:'1em',display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}> 
                {dataGame.map((data)=><div key={data.id}><List>{data = data}</List></div>)}
       </div>
       </>
          
            }
    </div>
   )
}