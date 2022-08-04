import { async } from "@firebase/util";
import { ActionTypes } from "@mui/base";
import { recomposeColor } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"





//data
export const  dataAsync = createAsyncThunk(
    'data/fetch', 
    async(page)=>{

            if(page.sorted === 'Desc'){
                const res = await axios.get(`https://api.rawg.io/api/games?key=baee91e75ea24efb978cf62eb1602b10&page=${page.page}`)
                const data = res.data.results.map((data)=>data).sort((a,b)=>a.rating - b.rating)
                return data
            }if(page.sorted === 'Asc'){
                const res = await axios.get(`https://api.rawg.io/api/games?key=baee91e75ea24efb978cf62eb1602b10&page=${page.page}`)
                const data = res.data.results.map((data)=>data).sort((a,b)=>b.rating - a.rating)
                return data
            }else if(page.sorted === null){
                const res = await axios.get(`https://api.rawg.io/api/games?key=baee91e75ea24efb978cf62eb1602b10&page=${page.page}`);
                return res.data.results
            }
            
        
    }
);

export const AscendData = createAsyncThunk(
    'data/Asc',
    async()
)

export const Updated = createAsyncThunk(
    'data/update', 
    async()=>{
        const rightNow = new Date();
        const date = rightNow.toISOString().slice(0,10);
        const res = await axios.get(`https://api.rawg.io/api/games?dates=2021-12-12,${date}&ordering=-added&key=baee91e75ea24efb978cf62eb1602b10`);
        return res.data.results
    }
);

export const  Searched = createAsyncThunk(
    'data/search', 
    async(slug)=>{
        const res = await axios.get(`https://api.rawg.io/api/games?key=baee91e75ea24efb978cf62eb1602b10&search=${slug}`);
        return res.data.results
    }
);





const DataSlice = createSlice({
    name:"data",
    initialState:{
        isLoading:false,
        isErr:null,
        post:[],
        search:[],
        update:[],
        page:1,
        sort:null,
        
       
    },
    reducers:{
        DataAsc: (state,action)=>{
            return {...state,post:[...action.payload].sort((a,b)=>b.rating - a.rating)}
        },
        DataDesc:(state,action)=>{
            return {...state,post:[...action.payload].sort((a,b)=>a.rating - b.rating)}
        },
        Data:(state,action)=>{
            return {...state,post:[...action.payload]}
        },

        pageNumber:(state,action)=>{
            return {...state,page:action.payload}
        },
        Sorter:(state,action)=>{
            return {...state,sort:action.payload}
        }
      
        
    },
     
      

        
    // },
    //extrareducer adalah field tambahan untuk menghandle actions yang dibuat oleh createasyncthunk
    extraReducers:(builder)=>{
        builder
            .addCase(dataAsync.fulfilled, (state, action)=>{
                state.post = action.payload;
                state.isLoading = false
                
            })
            .addCase(dataAsync.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(dataAsync.rejected,(state)=>{
                state.isLoading = false
                console.log('gagal mengambil data ')
            })
            .addCase(Searched.fulfilled,(state,action)=>{
                state.search = [...action.payload]
                state.isLoading=false
           
            })
            .addCase(Searched.pending,(state,action)=>{
                state.isLoading = true
            })
         
            .addCase(Updated.fulfilled,(state,action)=>{
                state.update = action.payload
                state.isLoading = false
            })
            .addCase(Updated.pending,(state)=>{
                state.isLoading = true
                
            })
          
           
    },
    })


export const dataG = state=>state.data.post;
export const SearchD = state=>state.data.search;
export const UpdateD = state =>state.data.update;
export const Page = state =>state.data.page;
export const Sorts = state =>state.data.sort
export const Loading = state=>state.data.isLoading


export const {DataAsc,DataDesc,pageNumber,Sorter,Data}= DataSlice.actions
export default DataSlice.reducer;