import React from 'react'
import Contact from '../componets/layout/Contact/contact';
import  Footer  from '../componets/layout/Footer/Footer';
import Navbar from '../componets/layout/Navbar/Navbar';
import Head from 'next/head'
function index({data}) {
    return (
        <div>
            <Contact data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`http://sandbox.airjaldi.com:3000/client/getContact`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }
  export default index;