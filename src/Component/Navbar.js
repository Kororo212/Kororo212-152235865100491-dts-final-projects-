import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Config/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveUser, SelUser, SelUserEmail, SelUserName, userLogin, userLogout } from '../Reducer/User';
import {useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDisplayName } from '@mui/utils';
import { onAuthStateChanged } from 'firebase/auth';






function NavBar() {
  const [search,setSearch] = useState("");
  const [message,setMessage] = useState('');
  const dispatch = useDispatch();
  let nav = useNavigate();
  const Search=(e)=>{
  e.preventDefault();
  
    let slug = search.split(' ').join('-').toLowerCase();

    if(slug){
      nav(`/search/${slug}`);
      setSearch('')
      setMessage('');
    }
    else{
     alert('no input')
    }

  }


  
const [user] = useAuthState(auth)
const Uname = useSelector(SelUserName)


const logout = ()=>{
  auth.signOut().then(()=>{
    dispatch(userLogout())
    alert("Logout Success")
    nav('/')
  }).catch((err)=>{
    setMessage(err.message)
  })
}

const profile = ()=>{
  window.scroll(0,0)
  nav('/profile')
}

const handler = ()=>{
    window.scrollTo(0,0)
  }


useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      dispatch(ActiveUser({userEmail:user.email,userName:user.displayName,uyid:user.uid}))
    }else{
      dispatch(userLogout())
    }
  })
},[])




return (
  <div className='head_navbar' style={{position:'fixed',width:'100%',zIndex:'11',top:0}}>
    <Navbar style={{postion:'fixed'}} bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand as={Link} onClick={window.scroll(0,0)} to="/">GameBor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/upcoming' onClick={handler}>Up Comming Game</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title={Uname? Uname:'Account'} id="navbarScrollingDropdown">
              {user?
              <>
              <NavDropdown.Item onClick={()=>{profile()}}>
               Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{logout()}}>
                Logout
              </NavDropdown.Item>
            </>
              :<NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>}
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={Search}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
   
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;