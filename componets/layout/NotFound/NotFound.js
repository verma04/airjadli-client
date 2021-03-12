

import React from 'react'

import { Section} from './Style';
import Navbar from '../Navbar/BlueNavbar';
import Footer from '../Footer/Footer';

function NotFound() {
    return (
        <div>
            <Navbar/>
              <Section>
            <div className='flex' >
                         
          <div  className="flex-2"  >
                <div className="grid" >
                  
                <div className="grid-1" >
                  <div className="head" >
                  <i class="fas fa-bug"></i>
                  <h1>404</h1>
                  </div>

                  <div className="para" >
                      <div className="haed"><h1>PAGE NOT FOUND</h1></div>
                  
              <p>We're are sorry, page you requested could not found . Please go back to homepage or contact us on admin@concierge.com </p>
                  </div>
                  <div className="button" >
 <button>Read More</button>  

</div>

</div>


                </div>
                </div>
        </div>
            </Section>
            <Footer/>
        </div>
    )
}

export default NotFound
