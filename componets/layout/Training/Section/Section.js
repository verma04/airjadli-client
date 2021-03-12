import Head from 'next/head';

import { Section} from './Style'


import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - AirJaldi</title>
      </Head>
      <Section>
    
    <div class="grid"   >

        <div className="head" >
            <h2>AirJaldi provides unlimited internet access to both individual and
business customers. We offer a variety of monthly plans to connect
your home or office at broadband speeds wirelessly. Our support
team is standing by to help determine which plan is best for you.</h2>
        </div>
    

    <div className="data" > 
    <div className="set" >
     <h2>GET A WIRELESS INTERNET CONNECTION
FOR YOUR HOME OR OFFICE</h2>

<p>Erum volorec epudae. Os delit alibusam, si core vellaborum est, et lab id quatis consequo volo-
res tenduci enturia dolorporem nimolum voluptiunt. Bus dolestrum quos doluptat qui beaquam
rehentum, nos maionsequis si rest eum a sam la dicium rae sam velenda neceat explicae dolorum
fugit, tem autectet, ut lab ium quame estiosa autati cume id qui berfere prem suntibu sapicim co-
ribus volupta cuptaectinus quis abo. Saepe soluptium elignat am, ea qui doluptaquid et a volorio
odignis ut od entiissi nimi, core volupta temporit aspereriandi derciate inctatur, qui as accaesto ea
nonsequasit ra accatus amusame vendebitiae vel is incturi amendit qui con nus dolorendi offici
beratecerum litate vent illa ento cum estinture sequi tota conseniendi re</p>

<p>Call 1-800-200-9989 or email support@airjaldi.com to get connected</p>

    </div>
    </div>


<div className="data-1" >

<div className="right" >
    <Image
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190579/AirJaldi/trgfw7joefexkkiahgrw.jpg'
       
        layout="fill"
       
        objectFit="cover"
      />


    </div>
    <div className="left" >


<p>“Our village is in a very remote place
adn we didn’t have any internet
facilities before AirJaldi arrived here.
Now, we no longer need to commute
70-80 Km to get connected.”</p>
<span>Piyush Manviya, Private User, Katkumbh, Maharashtra</span>


</div>


     </div>
   
    </div>



      </Section>
     

 
  
       
  
    </>
  );
}