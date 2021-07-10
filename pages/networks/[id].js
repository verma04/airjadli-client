import React from 'react'
import  City from '@/componets/layout/Network/City/City'
import  Navbar from '@/componets/layout/Navbar/BlueNavbar'
import  Footer from '@/componets/layout/Footer/Footer'
function index({city}) {
    return (
        <div>
            <Navbar/>
        
             <City  data={city}/>

        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://sandbox.airjaldi.com:3000/api/client/network');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(city => {
      return {
        params: { id: city.slug }
      }
    })
    
    return {
      paths,
      fallback: false
    }
    
  }

  export const getStaticProps = async (context) => {
   
    const id = context.params.id;
 
    const res = await fetch('https://airjadli.herokuapp.com/api/client/network/' + id);
    const data = await res.json();
  
  
    return {
      props: { city: data }
    }
  }
  
// index.getInitialProps = async ({query}) => {

  
//     return { query }
  
  
//   }

    


export default index;
