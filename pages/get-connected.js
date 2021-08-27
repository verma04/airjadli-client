import NotFound from '@/componets/layout/Get-connected/connected';
import  Footer  from '../componets/layout/Footer/Footer';
import Navbar from '../componets/layout/Navbar/Navbar';

function connect({data}) {
    return (
        <div>
        
           
            <NotFound data={data}/>
           
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://admin.airjaldi.com/client/getConnection`)
    const data = await res.json()
  
 
  
    return {
      props: { data },
      revalidate: 1,  // will be passed to the page component as props
    }
  }


export default connect;