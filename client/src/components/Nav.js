import React from 'react'
import Login from './Login';
import SignUp from './SignUp';

import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

import { 
    Navbar, 
    Container, 
    Nav,
  Button} from "react-bootstrap"
import "./Nav.css"


function Navigation(props){

return(
<Navbar className="navi">
  <Navbar.Brand className="spot">SpXt</Navbar.Brand>

  <Container className="cont">
  <Nav className="me-auto">

              
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} onClick={Auth.logout}>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/update'>
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to='/NBA'>
                    My Team
                  </Nav.Link>
                </>

              ) : (
                <>
                  <Nav.Link  onClick={props.handleShowLogin}>Login</Nav.Link>
                  <Nav.Link href="#features"onClick={props.handleShow}>Sign Up</Nav.Link>
                  <Nav.Link as={Link} to='/explore'>
                    Explore
                  </Nav.Link>
                  <Nav.Link as={Link} to='/addspot'>
                    Add Spot
                  </Nav.Link>
                  <Nav.Link  as={Link} to='/spot'>
                    Spot
                  </Nav.Link>

                </>
    )}
    
  </Nav>
  <Login showLogin={props.showLogin} handleCloseLogin={props.handleCloseLogin}/> 
  <SignUp show={props.show} handleClose={props.handleClose} />

  </Container>
</Navbar>
)
 
  }

  export default Navigation;