import React from 'react'
import Contact from '../componets/layout/Contact/contact';
import  Footer  from '../componets/layout/Footer/Footer';
import Navbar from '../componets/layout/Navbar/BlueNavbar';
function contact() {
    return (
        <div>
             <Navbar/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default contact
