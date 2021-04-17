import React from 'react'
import Contact from '../componets/layout/Contact/contact';
import  Footer  from '../componets/layout/Footer/Footer';
import Navbar from '../componets/layout/Navbar/BlueNavbar';
import Head from 'next/head'
function contact() {
    return (
        <div>
                 <Head>
        <title>Conatct - AirJaldi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
             <Navbar/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default contact
