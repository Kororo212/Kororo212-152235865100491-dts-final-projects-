import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Notfound=()=>{
    return (
        <Box>
            <Box sx={{minHeight:'80vh',mt:10,textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h3 style={{color:'black'}}>Page Not Found</h3>
                <Link to="/" style={{color:'red'}}>Go to top Page</Link>
            </Box>
        </Box>
    )
}

export default Notfound;