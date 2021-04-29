
import React, { Component } from 'react';

// import { Section} from './style';

// import  Footer from '../../../footer/Footer'
import{ Item  }from './Style';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default class vendor extends Component {


    
    render() {

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 4
            },
            mobile: {
              breakpoint: { max: 760, min: 0 },
              items: 1
            }
          };
        return (
            <React.Fragment>
             
            {/* <Section> */}
  
   
            <Item>

<div className="head" >
    <h2>PARTNERS</h2>
</div>
         
       
<div className="center" >

<Carousel responsive={responsive}>

<div >
<div className='img-wrapper'   >
   <img  src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1613621783/taayarx0dylikrjiczad.png"}  cache  alt="sdd"  ></img>
   <div className="fade" >
{/* <h2>number.category</h2> */}
</div>
   </div>

   
</div>
<div >
<div className='img-wrapper'   >
   <img id="border" src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1613621783/taayarx0dylikrjiczad.png"}  cache  alt="sdd"  ></img>
   <div className="fade" >
{/* <h2>number.category</h2> */}
</div>
   </div>

   
</div>
<div >
<div className='img-wrapper'   >
   <img   src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1613621783/taayarx0dylikrjiczad.png"}  cache  alt="sdd"  ></img>
   <div className="fade" >
{/* <h2>number.category</h2> */}
</div>
   </div>

   
</div>
<div >
<div className='img-wrapper'   >
   <img id="border"  src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1613621783/taayarx0dylikrjiczad.png"}  cache  alt="sdd"  ></img>
   <div className="fade" >
{/* <h2>number.category</h2> */}
</div>
   </div>

   
</div>
<div >
<div className='img-wrapper'   >
   <img  src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1613621783/taayarx0dylikrjiczad.png"}  cache  alt="sdd"  ></img>
   <div className="fade" >
{/* <h2>number.category</h2> */}
</div>
   </div>

   
</div>
 <div >
<div className='img-wrapper'   >
   <img id="border"  src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1613621783/taayarx0dylikrjiczad.png"}  cache  alt="sdd"  ></img>
   <div className="fade" >
{/* <h2>number.category</h2> */}
</div>
   </div>

   
</div>


</Carousel>


</div>

</Item>
 
{/* </Section> */}

           
            </React.Fragment>
        )
    }
}