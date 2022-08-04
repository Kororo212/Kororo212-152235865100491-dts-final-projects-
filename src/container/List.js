import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';






function List(data) {
    const navigate = useNavigate()
    const detail =(data)=>{
        navigate(`/detail/${data}`)
      }

  return (
    

    <Card key={data.children.id} style={{ width: '350px',minHeight:'400px',marginTop:'3em',marginBottom:'2em' }} 
    onClick={()=>{detail(data.children.id)}}
      >
      <Card.Img variant="top" style={{height:'200px',objectFit:'fill'}} src={data.children.background_image} />
      <Card.Body>
        <Card.Title style={{minHeight:'80px'}}>{data.children.name}</Card.Title>
        <Card.Text style={{minHeight:'150px'}}>
        {data.children.genres.map((data)=>{
          return (<><Button  style={{margin:'1em 0 1em 5px'}}>{data.name}</Button></>)
        })}
        </Card.Text>
        <Card.Text >
        Released : {data.children.released}
        </Card.Text>
      </Card.Body>
 
    </Card>

  );
}

export default List;