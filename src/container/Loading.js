import { Box } from '@mui/system';
import Spinner from 'react-bootstrap/Spinner';

function DisplayLoad() {
  return (
    <Box sx={{display:'flex',minHeight:'100vh',justifyContent:'center',marginTop:'20em',zIndex:'100'}}>
             <Box sx={{position:'fixed'}}>

             <Spinner animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
             </Spinner>
             <h3>Loading..</h3>
            </Box>

    </Box>
  );
}

export default DisplayLoad;