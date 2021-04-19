import NotFound from '@/componets/layout/Get-connected/connected';
import  Footer  from '../componets/layout/Footer/Footer';
import Navbar from '../componets/layout/Navbar/Navbar';
import Head from 'next/head'
function notfound() {
    return (
        <div>
              <Head>
        <title>Get-Connected</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Navbar/>
            <NotFound/>
            <Footer/>
        </div>
    )
}

export default notfound;