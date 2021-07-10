import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Section } from './Style'
import NewsLetter from '../NewsLetter/News'
import Section1 from './Section/Section'
import { useQuery } from "react-query";
import Image from 'next/image';
import Loading from '../../Loading/Loading';


export default function Home({data}) {
 
  return (
    <>
   
      <Head>
     
      <meta charset="UTF-8"/>

<title>Training - AirJaldi Networks</title>

<link rel="canonical" href="https://airjaldi.com/training" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Training - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/training" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Training - AirJaldi Networks" />


<meta name="og:title" content="Training"/>
<meta name="og:type" content="website"/>
<meta name="og:url" content="https://airjaldi.com/training"/>
      
      
    
  
      </Head>
   
   
   
      <Section>
      <Navbar/>
    <div class="grid"     >


    <Image
              className="myImage"
        src={data.tranningAvatar}
       
        layout="fill"
       
        objectFit="cover"
      />

      <div class='card'  >
      <div class='card-1'  >
  <div class='grid1' >

  <h1>
{data.tranningDescription}
      </h1>

   
  </div>
 



 


</div>
</div>
    </div>



      </Section>
     
<Section1  data={data}/>
 
      <NewsLetter/>
       
      <Footer/>
    
    </>
    
     
     );
   }


   _id: "60533086ab3b9e57a38706c5"
tranningAvatar: "https://res.cloudinary.com/dzcmadjl1/image/upload/v1617807988/Airjaldi/hemslhhpi75uglddh3q2.jpg"
tranningDescription: "Ad quaturibus sitio officae eossima dolo-\nrer umquame nullorem. Nimolup tamusci\naditasi doluptae conseque dis sam hili-\nbusamus, voluptas il ime pe doluptatem\nipsam, secabo.kjkhjk"
tranningData: "Anis dernati ute occae. On pe dessimus quaesedic temquam fugit\naudaecus a de volupta prate autet aut eat adi accullest velentur mi,\ncon rae eiciandel id ut aut erit volupti reruptatis endandit omnis\neatem accumquam expe escias et voluptatem eseque peruptatum\nveliam nis eatem earum volupti squatur sintur."
SectionHead: "LOREM IPSU"
SectionData: "Erum volorec epudae. Os delit alibusam, si core vellaborum est, et lab id quatis consequo volo-\nres tenduci enturia dolorporem nimolum voluptiunt. Bus dolestrum quos doluptat qui beaquam\nrehentum, nos maionsequis si rest eum a sam la dicium rae sam velenda neceat explicae dolorum\nfugit, tem autectet, ut lab ium quame estiosa autati cume id qui berfere prem suntibu sapicim co-\nribus volupta cuptaectinus quis abo. Saepe soluptium elignat am, ea qui doluptaquid et a volorio\nodignis ut od entiissi nimi, core volupta temporit aspereriandi derciate inctatur, qui as accaesto ea\nnonsequasit ra accatus amusame vendebitiae vel is incturi amendit qui con nus dolorendi offici\nberatecerum litate vent illa ento cum estinture sequi tota conseniendi re, officae maximaximil ilis\nvendis es aut ut ea nest asimporro que nimagnam nos dolut quias rat."
Section2img: "https://res.cloudinary.com/dzcmadjl1/image/upload/v1617808284/Airjaldi/kqyutqonj25kxh0b39ah.jpg"
Section2Data: "“Our village is in a very remote place\nadn we didn’t have any internet\nfacilities before AirJaldi arrived here.\nNow, we no longer need to commute\n70-80 Km to get connected.”dd"
__v: 0
Section2Name: "Piyush Manviya, Private User, Katkumbh, Maharashtra"