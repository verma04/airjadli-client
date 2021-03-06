import Faq from '@/componets/layout/Faq/Faq';
import  Footer  from '../componets/layout/Footer/Footer';
import Navbar from '../componets/layout/Navbar/Navbar';
import Head from 'next/head'
function index({data}) {
    return (
        <div>
            <Faq data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/client/getFaq`)
    const data = await res.json()
  
   
  
    return {
      props: { data }, 
      revalidate: 1, 
    }
 
  }
  export default index;