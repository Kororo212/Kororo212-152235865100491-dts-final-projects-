import * as React from "react";
import { useEffect,useState } from "react";
import List from "../container/List";
import TopList from "./TopList";
import Pages from './Pages'
import { dataAsync, dataG, Loading, Page, Sorter, Sorts} from "../Reducer/DataGame";
import { useSelector,useDispatch } from "react-redux/es/exports";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import DisplayLoad from "../container/Loading";





const ListData =()=>{
  
  
    const [sort,setSort] = useState('')
    const dataGame = useSelector(dataG)

   
    const dispatch = useDispatch();
    const page = useSelector(Page)

    const sorted = useSelector(Sorts)

   const Load = useSelector(Loading)

    const handleSort=(event,sort)=>{
        dispatch(Sorter(sort))
        setSort(sort)
        
        
    }
   

    useEffect(() => {
        dispatch(dataAsync({page,sorted}))
    }, [dispatch,page,sorted]);
    

    return (
        <div style={{minHeight:'100vh'}}>
            {Load? <DisplayLoad/> : <><div style={{minHeight:'20vh'}}>
                <TopList />
          
            </div>
            <div style={{display:"flex",justifyContent:'center',paddingTop:'2em',flexDirection:'row',
                flexWrap:'nowrap',alignItems:'center'
        }}>
                <div id="top">
                    <h2>Sort By Rating:</h2>
                </div>
                

                <ToggleButtonGroup
                    value={sort}
                    exclusive
                    onChange={handleSort}
                    style={{marginLeft:'10px'}}
                 
                >
                    <ToggleButton value="Asc" style={{marginRight:'10px'}}>
                         Asc
                    </ToggleButton>
                    <ToggleButton value="Desc" >
                        Desc
                    </ToggleButton>
                </ToggleButtonGroup>
         
              
                
            </div>
            <div className="List"  style={{marginTop:'1em',display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
            {dataGame && dataGame.map(data=><><List >{data}</List></>)}
            </div>

            <div style={{display:'block'}}><Pages sort={sort}/></div>
            </>
            
            
            }
            
        </div>
    )
}

export default ListData;