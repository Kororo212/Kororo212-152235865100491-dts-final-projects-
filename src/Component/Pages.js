import React from "react";
import { useDispatch} from "react-redux";
import { pageNumber} from "../Reducer/DataGame";
import { Button } from "@mui/material";






const Pages = ()=>{
   
    
    const numberPage =[{page:1,value:1}
        ,{page:2,value:2}
        ,{page:3,value:3}
        ,{page:4,value:4}
        ,{page:5,value:5}]
    const dispatch = useDispatch()

    const pageNumb =(number)=>{
          dispatch(pageNumber(number))
          window.location.replace('#top')
    }

 
 
    
    
    return (
        <div style={{display:'flex',justifyContent:'center',marginBottom:'2em'}}>
            {numberPage.map((data)=><>
            <Button style={{}}
            onClick={()=>pageNumb(data.value)} 
            key={data.value}>{data.page}</Button></>)}
        </div>
    )
    
}

export default Pages