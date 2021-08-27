import React from 'react'
import Navbar from '../componets/layout/Navbar/Navbar'
import Paymnet from '../componets/layout/payments/payment'

function payment({data}) {
    return (
        <div>
          
         <Paymnet data={data}/>   
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/api/getPayments`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }

export default payment
