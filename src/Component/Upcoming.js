import React from "react";

import {useEffect } from "react";
import List from "../container/List";
import { useSelector,useDispatch } from "react-redux";
import { Updated,UpdateD } from "../Reducer/DataGame";
import DisplayLoad from "../container/Loading";
import { Loading } from "../Reducer/DataGame";

export const Upcoming =()=>{
 
    const dataGames = useSelector(UpdateD);
    const dispatch = useDispatch();
    const Load = useSelector(Loading)
    useEffect(()=>{
        dispatch(Updated())
    },[dispatch])
    return(
        <>
        {Load? <DisplayLoad/> :
        <div className="List" style={{marginTop:'1em',display:'flex',minHeight:'100vh',justifyContent:'space-around',flexWrap:'wrap'}}> 
                {dataGames.map((data)=><div key={data.id}><List>{data=data}</List></div>)}
            </div>}
        </>
        
    )
}