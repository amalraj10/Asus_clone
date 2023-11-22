import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-bootstrap';

function Header() {
  return (
    <div> <Navbar style={{height:'72px'}} bg="black" data-bs-theme="dark">
    <Container>
      <Navbar.Brand ><p style={{ fontSize: '13px',marginTop:'9px',marginLeft:'22px'}}>Suggest to select and visit the website of your location for more relevant products, promotions and events.</p></Navbar.Brand>
      <Nav className="me-auto">
         
      <Nav.Link href="#home"><Button variant="outline-light" style={{marginLeft:'200px',height:'40px',width:'110px',fontSize: '17px',fontWeight: '500'}} >Stay here</Button>{' '}</Nav.Link>
      <Nav.Link href="#home"> <Button variant="primary" style={{height:'40px',fontSize: '17px',backgroundColor:'#1951e0'}}>Switch the Website of Your Location.</Button>{' '}</Nav.Link>

      </Nav>
    </Container>
  </Navbar>
  <Navbar   bg="light" style={{height:'40px'}} data-bs-theme="light">
        <Container >
          <Navbar.Brand style={{marginLeft:'20px',width:'20px'}} href="#home"><img src="https://www.asus.com/media/Odin/images/header/ROG_hover.svg" alt="" /></Navbar.Brand>
          <Navbar.Brand style={{marginLeft:'20px',color:'#e1e5f0'}} href="#home">| <img style={{marginLeft:'20px'}} src="https://www.asus.com/media/Odin/images/header/ProArt_hover.svg" alt="" /></Navbar.Brand>
          <Navbar.Brand style={{color:'#e1e5f0'}} href="#home">| <img style={{marginLeft:'20px'}} src="https://www.asus.com/media/Odin/images/header/IoT_hover.svg" alt="" /></Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft:'850px'}}>
          <Nav.Link href="#features" style={{color:'black'}}>Gaming</Nav.Link>
            <Nav.Link href="#pricing"  style={{color:'black'}}>Buisness</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <hr style={{marginTop:'-1px',marginBottom:'1px'}} />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >Asus</Navbar.Brand>
          <Nav className="me-auto" style={{}}>
            <Nav.Link  >Mobile / Handhelds
</Nav.Link>
            <Nav.Link >Laptops</Nav.Link>
            <Nav.Link >Displays / Desktops</Nav.Link>
            <Nav.Link >Motherboards / Components</Nav.Link>
            <Nav.Link >Networking / IoT / Servers</Nav.Link>
            <Nav.Link >Accessories</Nav.Link>
          </Nav>
          <Nav className="me-auto" >
          <Nav.Link style={{color:'black',marginLeft:'140px'}}>Support</Nav.Link>
            <Nav.Link  style={{color:'black',marginLeft:'17px'}}><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link  style={{color:'black',marginLeft:'17px'}}><i class="fa-solid fa-user"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr style={{marginTop:'-1px',marginBottom:'1px'}} />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar style={{marginLeft:'400px'}}>Create an ASUS account today to register your product for better support.
          <a href="">Learn more</a>
          </Navbar>
      
        </Container>
      </Navbar>
      </div>
  )
}

export default Header