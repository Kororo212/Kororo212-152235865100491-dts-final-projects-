import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "../Reducer/DataGame";

function TopList() {
    const [topdata,setTopData] = useState([]);
    const Load = useSelector(Loading)
    const data = async()=>{
        const data = await axios
        .get(`https://api.rawg.io/api/games?key=baee91e75ea24efb978cf62eb1602b10&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
        .then((res)=>{

            let top = res.data.results
            top = top.sort((a,b)=>b.rating - a.rating)
        
            setTopData(top.slice(0,5))
        })
        
    }

   
    let navigate = useNavigate();
    const detail =(data)=>{
         navigate(`/detail/${data}`)
        }

    useEffect(() => {
       data();
    }, []);
  return (
<Carousel>
  {topdata.map((data,i)=>
      <Carousel.Item interval={1000} key={data.id} onClick={()=>{detail(data.id)}}>
        <img 
          className="d-block w-100"
          src={data.background_image}
          alt={data.name}
        />
        <Carousel.Caption style={{position:'absolute',top:100}}>
          <h1>{data.name}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    
    )}
    </Carousel>

  )
}

export default TopList;