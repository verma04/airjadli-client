import React from 'react'
import Navbar from '../layout/Navbar/BlueNavbar'
import Footer from '../layout/Footer/Footer'
import  { Section  } from './Style'
import { useQuery } from "react-query";
import Loading from '../Loading/Loading';
import {  convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Head from 'next/head';


function gstRegistration() {
    
    return (
        <div>


<HeadHead>
	<meta charset="UTF-8"/>

		<title>GST Registration - AirJaldi Networks</title>

	

<link rel="canonical" href="https://airjaldi.com/gstRegistration" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="GST Registration - AirJaldi Networks" />
<meta property="og:url" content="https://airjaldi.com/gstRegistration" />
<meta property="og:site_name" content="AirJaldi Networks" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="GST Registration - AirJaldi Networks" />
            </HeadHead>
            <Navbar/>

     
            <Section>
            <div  className="flex" >
             <div className="single-post">
            
            

           	

			
	


			<table id="customers">

      
      <tr>
        <td><b>State</b></td>
        <td><b  >Provisional GST Registration No.</b></td>
        <td ><b>Principal Place Of Business</b></td>
    </tr>
    <tr>
        <td >Bihar</td>
        <td >10AAECR3078G1ZO</td>
        <td >RBB Pvt Ltd (Airjaldi). Arya Complex, Japanese Temple Road Opposite Thai Temple Near Hotel Sujata International, Bodh Gaya, Bihar pin-824231</td>
    </tr>
     <tr>
        <td >Delhi</td>
        <td >07AAECR3078G1ZB</td>
        <td >A-136, Defence Colony New Delhi 110024 india</td>
    </tr>
     <tr>
        <td >Himachal Pradesh</td>
        <td >02AAECR3078G1ZL</td>
        <td >Rural Broadband Pvt. Ltd. (AirJaldi) C/O Rtd. Col. K.B. Thappa Village Dal, Post Office Dal Dharamsala Cantt Distt Kangra, HP 176216</td>
    </tr>
     <tr>
        <td >Himachal Pradesh</td>
        <td >02AAECR3078G1ZL</td>
        <td >Airjaldi Bir Office, C/O Office of the Representative, Dege Division Tibetan Khampa Industrial Society P.O Bir Tehsil Bajnath, Distt Kangra,H.P INDIA Pin code :176077</td>
    </tr>
     <tr>
        <td >Himachal Pradesh</td>
        <td >02AAECR3078G1ZL</td>
        <td >AirJaldi Office, c/o Ruma Negi -Near Petrol Pamp Aleo Nagar Road, Post office Manali Pin 175131, District Kullu. Himachal pardesh (INDIA)</td>
    </tr>
     <tr>
        <td >Himachal Pradesh</td>
        <td >02AAECR3078G1ZL</td>
        <td >Rural Broadband Pvt. Ltd. (AirJaldi)House NO: 403/5 Upper Sain Mohalla Teh. Sadar Distt. Mandi, H.P. Pin: 1750001</td>
    </tr>
     <tr>
        <td >Jharkhand</td>
        <td >20AAECR3078G2ZM</td>
        <td >RURAL BROADBAND PRIVATE LIMITED C/O - Sunita Sadan Opposite of Military Firing Range, Ashram Marg, Bariyatu Road, Near Booty More, Ranchi, Pin Code-834009</td>
    </tr>
     <tr>
        <td >Jharkhand</td>
        <td >20AAECR3078G2ZM</td>
        <td >Rural Broadband Pvt. Ltd. (AirJaldi) C/O Murli Gop Near Vinoba Bhave University,Ranchi Patna Road, Sindur chowk,Hazaribah, PIN-825301</td>
    </tr>
     <tr>
        <td >Jharkhand</td>
        <td >20AAECR3078G2ZM</td>
        <td >Rural Broadband Pvt. Ltd. (AirJaldi) C/O-Parmanand Pandey Subhash Colony, Behind St.Joseph morning School, Sahibganj Jharkhand Pin code: 81610</td>
    </tr>
     <tr>
        <td >Karnataka</td>
        <td >29AAECR3078G1Z5</td>
        <td >Rural Broadband Pvt. Ltd. (AirJaldi) Office. P.O. Tibetan Colony Mundgod Camp 3 ,Ex-Army Complex Shop No:6 Distt Karwar, North Karnataka Karnataka State, Pin 581411</td>
    </tr>
     <tr>
        <td >Karnataka</td>
        <td >29AAECR3078G1Z5</td>
        <td >Rural Broadband Pvt. Ltd. (AirJaldi) House No. – 59, Old Camp 2 PO. Bylakupee, Distt Mysore, Karnataka State 571104</td>
    </tr>
     <tr>
        <td >Maharastra</td>
        <td >27AAECR3078G1Z9</td>
        <td >Airjaldi Office , Near Gram Panchayat Harisal, At Post Harisal Tehsil - Dharni, Distt - Amravati (Maharashtra) Pin - 444813</td>
    </tr>
     <tr>
        <td >Tamilnadu</td>
        <td >33AAECR3078G1ZG</td>
        <td >C/O A. Subramaniyan 377 house no, Ashok Nagar, Behind Bharat Collage of Science and Management Thanjavur - 613005 Tamil Nadu, India</td>
    </tr>
     <tr>
        <td >Uttarakhand</td>
        <td >05AAECR3078G1ZF</td>
        <td >C/O Aditya Village Bagi, Post Office Koti, Vishthapit Ksetra,Athoorwala, BhaniawalaDehradun Uttrakhand Pin Code: 248144</td>
    </tr>
     <tr>
        <td >Uttarakhand</td>
        <td >05AAECR3078G1ZF</td>
        <td >AirJaldi Office, Opposite Patanjali Shop, Naini Bend, Bhimtal Road - Bhowali Pin 263132, District Nainital, Uttarakhand</td>
    </tr>


</table>
		</div>
        </div>
            
       
       
            </Section>
            <Footer/>

          
            
        </div>
    )
}

export default gstRegistration
