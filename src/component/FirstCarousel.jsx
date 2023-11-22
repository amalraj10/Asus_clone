import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import images from './image/1st.jpg'
import images2 from './image/2nd.jpg'
import images3 from './image/3rd.jpg'
import images4 from './image/4th.jpg'
import images5 from './image/5th.jpg'
import images6 from './image/6th.jpg'
import imagesadd from './image/addimg.jpg'
import imagec1 from './image/c1.jpg'
import imagec2 from './image/c2.jpg'
import imagec3 from './image/c3.jpg'
import imagec4 from './image/c4.jpg'
import imagec5 from './image/c5.jpg'
import imagec6 from './image/c6.jpg'
import imageB1 from './image/B1.webp'
import imageB2 from './image/B2.webp'
import imageB3 from './image/B3.webp'
import imageB4 from './image/B4.webp'
import imageB5 from './image/B5.webp'
import imageB6 from './image/B6.webp'
import imageB7 from './image/B7.webp'
import imageB8 from './image/B8.webp'
import imageD1 from './image/D1.webp'
import imageD2 from './image/D2.webp'
import imageD3 from './image/D3.webp'
import imageD4 from './image/D4.avif'
import imageD5 from './image/D5.webp'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Styles.css';


function FirstCarousel() {
  return (
    <div>
       <Carousel data-bs-theme="dark"  >
      <Carousel.Item >
        <img  style={{height:'650px'}}
          className="d-block w-100"
          src={images}
          alt="First slide"
          
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'650px'}}
          className="d-block w-100 "
          src={images2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontSize: '40px',marginTop:'-500px'}}>ASUS Vivobook S 15 OLED <br /> BAPE Edition</h1>
       <a href="">Learn more</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'650px'}}
          className="d-block w-100"
          src={images3}
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'650px'}}
          className="d-block w-100"
          src={images4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ fontSize: '50px',color:'#057aa8',fontWeight:'490',marginTop:'-400px',marginLeft:'-635px'}}>Upgrade to Incredible</h5> <br  />
          <h5 style={{ fontSize: '50px',color:'#057aa8',fontWeight:'490',marginTop:'-20px',marginLeft:'-850px'}}>Productivity</h5>
         
          <h5 style={{ fontSize: '35px',fontWeight:'100',marginTop:'20px',marginLeft:'-645px'}}>Solutions for small and medium </h5> <br  />
          <h5 style={{ fontSize: '35px',fontWeight:'100',marginTop:'-30px',marginLeft:'-950px'}}> businesses</h5><br />

          <a style={{marginLeft:'-1020px',marginTop:'-20px'}} href="">Learn more</a>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'650px'}}
          className="d-block w-100"
          src={images5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ fontSize: '45px',color:'white',fontWeight:'350',marginTop:'-400px',marginLeft:'-645px'}}>ASUS ExpertBook B9 OLED</h5>
          <h5 style={{ fontSize: '35px',color:'white',fontWeight:'350',marginTop:'10px',marginLeft:'-45px',textAlign:'justify'}}>
          The epitome of sustainable <br /> excellence
         </h5>
         <br />
         <a style={{ fontSize: '20px',fontWeight:'350',marginTop:'10px',marginLeft:'-1050px',textAlign:'justify'}} href="">Learn more</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'650px'}}
          className="d-block w-100"
          src={images6}
          alt="Third slide"
        />
        
       
      </Carousel.Item>
    </Carousel>

    <img style={{width:'100%',height:'650px'}} src={imagesadd} alt="" />
    
    <div className='container-'>
   <div className='row    position-relative' style={{marginTop:'15px'}}>
    <div className="col-lg-6 "><img style={{width:'100%',height:'550px',width:'760px'}} src={imagec1} alt="" /> <h4 style={{marginTop:'-520px',marginLeft:'165px', fontSize: '30px',fontWeight:'450'}} className='position-absolute'>ASUS Vivobook S 15 OLED  <br  /><center><h4 style={{fontSize: '30px',fontWeight:'450'}} >BAPE Edition</h4><a style={{fontSize: '20px'}} href="">Learn more</a></center><br /></h4></div>
    <div className="col-lg-6"><img style={{width:'100%',height:'550px',}} src={imagec2} alt="" /><h4 style={{marginTop:'-155px',marginLeft:'185px', fontSize: '35px',fontWeight:'500'}} className='position-absolute'>ASUS Zenbook 14 OLED <br  /></h4><center><h4 style={{fontSize: '20px',fontWeight:'450',marginTop:'-110px'}} >Power and Elegance,Reimagined</h4><a style={{fontSize: '20px',marginTop:'200px'}} href="">Learn more</a></center><br /></div>

   </div>
   <div className='row' style={{marginTop:'15px'}}>
    <div className="col-lg-6 "><img  style={{width:'100%',height:'550px',width:'760px',}} src={imagec3} alt="" /><h4 style={{marginTop:'-170px',color:'#1085eb',marginLeft:'215px', fontSize: '30px',fontWeight:'450'}} className='position-absolute'>ASUS <b>Expert Center </b> D9 <br  /></h4><center><h4 style={{fontSize: '30px',fontWeight:'450',marginTop:'-120px'}} >Maximum productivity, rock-solid <br />reliability</h4><a style={{fontSize: '20px',color:'black',marginTop:'200px'}} href="">Learn more</a></center><br /> </div>
    <div className="col-lg-6"><img style={{width:'100%',height:'550px',border:'2px solid #0a1ea1',borderRadius:'5px'}} src={imagec4} alt="" /> <h4 style={{marginTop:'-210px',color:'#3c2b87',marginLeft:'215px', fontSize: '40px',fontWeight:'490'}} className='position-absolute'>ASUS Chromebook <br /><center>Plus CM34 Flip</center> <br  /></h4><center><p style={{fontSize: '22px',fontWeight:'450',marginTop:'-110px'}} >Your secure and capable companion</p><a style={{fontSize: '20px',marginTop:'200px'}} href="">Learn more</a></center><br /></div>

   </div>
   <div className='row' style={{marginTop:'15px'}}>
    <div className="col-lg-6 "><img style={{width:'100%',height:'550px',width:'760px'}} src={imagec5} alt="" /></div>
    <div className="col-lg-6"><img style={{width:'100%',height:'550px'}} src={imagec6} alt="" /></div>

   </div></div>
   <br /><br />
<center>
  <h1>Campaigns and Events</h1>
  <a href="">See all </a>
</center>
<br /><br />
<center>
<Carousel style={{width:'1200px'}} data-bs-theme="light">
      <Carousel.Item>
      <CardGroup>
      <Card className='abcd'>
        <Card.Img className='abcd' variant="top" src={imageB1} />
        <Card.Body>
          <Card.Title className='A ' style={{marginLeft:'-100px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>No.1 Gaming Monitor Brand</Card.Title>
         
        </Card.Body>
     
      </Card>
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB2} />
        <Card.Body>
          <Card.Title style={{marginLeft:'-140px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>Upgrading to incredible</Card.Title>
       
        </Card.Body>
        
      </Card >
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB3} />
        <Card.Body>
          <Card.Title style={{marginLeft:'-60px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>Upgrading Education to Incredible</Card.Title>
         
        </Card.Body>
      
      </Card>
    </CardGroup>
    
      </Carousel.Item>
      <Carousel.Item>
      <CardGroup>
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB4} />
        <Card.Body>
          <Card.Title style={{marginLeft:'-160px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>ZenWiFi Mesh System</Card.Title>
         
        </Card.Body>
      
      </Card>
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB5} />
        <Card.Body>
          <Card.Title style={{marginLeft:'-10px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>Most number of TUV certified Eye Care monitor</Card.Title>
         
        </Card.Body>
      
      </Card >
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB6} />
        <Card.Body>
          <Card.Title style={{marginLeft:'-180px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>WiFi 6e & WiFi 6E</Card.Title>
          
        </Card.Body>
     
      </Card>
    </CardGroup>
    
      </Carousel.Item>
      <Carousel.Item>
      <CardGroup>
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB6} />
        <Card.Body>
          <Card.Title style={{marginLeft:'-180px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>WiFi 6e & WiFi 6E</Card.Title>
          
        </Card.Body>
     
      </Card>
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB7} />
        <Card.Body>
          <Card.Title style={{fontWeight:'390',color:'#606161',fontSize: '20px'}}>The Best Professional Monitor Award from European Hardware Awards 2020</Card.Title>
          
        </Card.Body>
       
      </Card>
      <Card className='abcd'>
        <Card.Img variant="top" src={imageB8} />
        <Card.Body>
          <Card.Title style={{marginLeft:'-180px',fontWeight:'390',color:'#606161',fontSize: '20px'}}>Join Asus member</Card.Title>
          
        </Card.Body>
       
      </Card>
     
    </CardGroup>
    
      </Carousel.Item>
    </Carousel>
    </center>
    <br /><br />
    <div className='row'>
    <div  className="col-lg-6 ">
    <div className='container-fluid'>
   
      <div className='coc'  style={{  position: 'relative'}} >
      <img style={{width:'750px',height:'450px'}}
        src={imageD1}
        alt="Placeholder"
        className="image"
      />
      <div className="overlay" style={{position: 'absolute',marginTop:'355px', top: '0', left: '0',width: '750px',  height: '90px',display: 'flex', alignItems:'center',justifyContent:'center',backgroundColor:' rgba(0, 0, 0, 0.5)'}}>
        <p style={{color: 'white',fontSize:'20px',}} className="caption">How to choose a power supply for your new gaming PC<br />
        <p style={{color: 'white',fontSize:'15px',}} className="caption">Buying a high quality power supply for your PC is critical. Here's what to prioritize for your next build.</p></p>
      </div>
    </div>
      </div>  </div>
      <div className="col-lg-6 ">
      <div className='row'>
      <div  className="col-lg-6 coc "><div style={{  position: 'relative'}} >
      <img style={{width:'375px',height:'220px'}}
        src={imageD2}
        alt="Placeholder"
        className="image"
      />
      <div className="overlay" style={{position: 'absolute',marginTop:'128px', top: '0', left: '0',width: '375px',  height: '90px',display: 'flex', alignItems:'center',justifyContent:'center',backgroundColor:' rgba(0, 0, 0, 0.5)'}}>
    <center>    <p style={{color: 'white',fontSize:'20px',marginTop:'20px'}} className="caption">Power up your network in time for  <br />
        <p style={{color: 'white',fontSize:'15px',marginTop:'0px'}} className="caption">ROG gaming routers offer what you need: <br />the latest WiFi tech, an easy setup, and...</p></p></center>
      </div>
</div> </div>
      <div className="col-lg-6 coc "><div style={{  position: 'relative'}} >
      <img style={{width:'375px',height:'220px'}}
        src={imageD3}
        alt="Placeholder"
        className="image"
      />
      <div className="overlay" style={{position: 'absolute',marginTop:'128px', top: '0', left: '0',width: '375px',  height: '90px',display: 'flex', alignItems:'center',justifyContent:'center',backgroundColor:' rgba(0, 0, 0, 0.5)'}}>
    <center>    <p style={{color: 'white',fontSize:'20px',marginTop:'20px'}} className="caption">New Z790 motherboards from <br />
        <p style={{color: 'white',fontSize:'15px',marginTop:'0px',marginRight:'7px'}} className="caption">WiFi 7 support, more fast storage, front-panel device charging, intelligent controls</p></p></center>
     
</div></div>
    </div>
    <div className='row' style={{marginTop:'10px'}}>
    <div className="col-lg-6 coc "><div style={{  position: 'relative'}} >
      <img style={{width:'375px',height:'220px'}}
        src={imageD4}
        alt="Placeholder"
        className="image"
      />
      <div className="overlay" style={{position: 'absolute',marginTop:'129px', top: '0', left: '0',width: '370px',  height: '90px',display: 'flex', alignItems:'center',justifyContent:'center',backgroundColor:' rgba(0, 0, 0, 0.5)'}}>
    <center>    <p style={{color: 'white',fontSize:'20px',marginTop:'20px'}} className="caption">Baldur’s Gate 3 on the ROG Ally: <br />
        <p style={{color: 'white',fontSize:'15px',marginTop:'0px'}} className="caption">Our optimized graphics settings will help you balance fidelity and framerate in...</p></p></center>
      </div>
</div> </div>
      <div className="col-lg-6 coc "><div style={{  position: 'relative'}} >
      <img style={{width:'365px',height:'220px',marginLeft:'12px'}}
        src={imageD5}
        alt="Placeholder"
        className="image"
      />
      <div className="overlay" style={{position: 'absolute',marginTop:'129px',marginLeft:'20px', top: '0', left: '0',width: '350px',  height: '90px',display: 'flex', alignItems:'center',justifyContent:'center',backgroundColor:' rgba(0, 0, 0, 0.5)'}}>
    <center>    <p style={{color: 'white',fontSize:'20px',marginTop:'20px'}} className="caption">Hands-on: the ROG Strix Scope II<br />
        <p style={{color: 'white',fontSize:'15px',marginTop:'0px',marginRight:'7px'}} className="caption">Tempted by compact boards, but need a model with a numpad? We made the Ro...</p></p></center>
     
</div></div>
    </div>
    </div>

    </div> </div></div>
   
    </div>
   
  )
}

export default FirstCarousel