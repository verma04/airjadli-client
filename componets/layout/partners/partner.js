
import React, { Component } from 'react';
import Image from 'next/image';
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
              items: 4
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4
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
{this.props.data.map((number) =>
<div >
<div className='img-wrapper'   >
<Image  layout="fill" objectFit="contain"  src={number.logo}  cache  alt="sdd"  ></Image>
  
   </div>

   
</div>

)}
</Carousel>


</div>

</Item>
 
{/* </Section> */}

           
            </React.Fragment>
        )
    }
}