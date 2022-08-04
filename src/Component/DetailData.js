import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Pages from "./Pages";




export const DetailData = ()=>{
    let params = useParams()
    const URL = `https://api.rawg.io/api/games/`;
    const key =`?key=baee91e75ea24efb978cf62eb1602b10`;
    const [genres,setGenres]=useState([]);
    const [tags,setTags]= useState([]);
    const [desc,setDesc]= useState('');
    const [data,setData] = useState([]);

    

    useEffect(() => {
        const Fetchdata = async()=>{
    
            const dataGame = await axios
            .get(`${URL}${params?.data}${key}`)
            .then((res)=>{
           
              setData(res.data)
              setGenres(res.data.genres)
              const descripton = res.data.description_raw.replace('*','');
              setDesc(descripton)
              setTags(res.data.tags)
            })
        }
        Fetchdata();
    }, []);
    return (
        <div key={data.id} className="gameContainer" style={{minHeight:'100vh',maxHeight:'max-conten',paddingTop:'10em',backgroundImage:`url(${data.background_image})`
        ,overflow:'hidden',backgroundAttachment:'fixed'
        ,backgroundSize:'cover'}}>
         <div>
            
            <h1 style={{color:'white',textAlign:'center'}}>{data.name}</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
                <img style={{objectFit:"cover",width:"300px",border:'5px solid black'}} src={data.background_image_additional}/>
            </div>
            <div style={{marginTop:'1em',paddingLeft:'2em'}}>
                <h2 style={{color:'white'}}>Description : </h2>
                <h2 style={{color:'White',marginRight:'1em'}}><span style={{display:'inline-block',marginLeft:'50px'}}></span>
                {desc}</h2>
            </div>
            <h3 style={{color:'white',textAlign:"center",paddingTop:'2em'}}>Genres:</h3>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                {genres.map((data,i)=><h3 key={i} style={{color:'red'}}>{data.name}</h3>)}
            </div>
            <h3 style={{color:'white',textAlign:"center",paddingTop:'2em'}}>Tags:</h3>
            <div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap'}}>
            {tags.map((data,i)=><h3 key={i} style={{color:'red',paddingLeft:'1em',paddingRight:'1em'}}>#{data.name}</h3>)}
            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'2em',paddingBottom:'3em'}}>
                <Button><a style={{textDecoration:'none',color:'white'}} href={data.website}>Go to Websites</a></Button>
            </div>
         </div>
         
        </div>
    )
} 
