import React, { Component } from 'react';
import  { Section} from './Style'
import Image from 'next/image';

export default class Contact extends Component {
   
    state = {
     one:true,
     two:true,
     three:true,
     four:true,
     five:true,
     six:true,
     seven:true,
     eight:true,
     nine:true,
     ten:true,
     

     value:'',
    
     

    }

    async componentDidMount () {

    
     
      document.title = "Faq"
 
      
    
    }
    handleChange =(event) => {
      this.setState({value: event.target.value});
    }
    toggle1 = () => {
      this.setState({one:!this.state.one})
    }
    toggle2 = () => {
      this.setState({two:!this.state.two})
    }
    toggle3 = () => {
      this.setState({three:!this.state.three})
    }
    toggle4 = () => {
      this.setState({four:!this.state.four})
    }
    toggle5 = () => {
      this.setState({five:!this.state.five})
    }
    toggle6 = () => {
      this.setState({six:!this.state.six})
    }
    toggle7 = () => {
      this.setState({seven:!this.state.seven})
    }
    toggle8 = () => {
      this.setState({eight:!this.state.eight})
    }
    toggle9= () => {
      this.setState({nine:!this.state.nine})
    }
  
    render() {
        return (
          <React.Fragment>
          
            <Section>
            <div class="grid"     >
   
   <div className="bird" > 
 <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1616733745/qnjyqjew5x5sbmfq0rrp.png'} ></img>
  </div>
   
   
   
   
   <Image
             className="myImage"
             src={"https://res.cloudinary.com/dzcmadjl1/image/upload/v1616044262/Airjaldi/ho0ro6wdyf9owyad4l4c.jpg"}
      
       layout="fill"
      
       objectFit="cover"
     />
       <div class='card'  >
     <div class='card-1'  >
 <div class='grid1' >

 <h1>
 dssd
sd
sd

describe('sdd'

     </h1>

  
 </div>







</div>
</div>



</div>
    
    
    
   


                  <div className='flex' >
                      <div className='flex-1' >
                  <div className="hero" >
                   <h2>FAQ</h2>
                   <h4>Question not answered yet? We are here to help!</h4>

                  </div>

                 

         

<div className="middle" >
   

   <h2>General</h2>
   
  
            

   <div className='drop' >
   <div onClick={this.toggle1} className="up" >
   <h4>What are your hours of operation?</h4>
   
   {(() => {
           if (this.state.one === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.one === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
          Our office is open from 9:00 am – 5:30 pm from Monday – Friday every week, however our Customer support is open 24/7.
               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   <div className='drop' >
   <div onClick={this.toggle2} className="up" >
   <h4> What is the use of customer ID?</h4>
   
   {(() => {
           if (this.state.two === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle2} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.two === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
      The Customer ID is a unique identification number given to every Customer having a Home/Business connection with AirJaldi.

Uses of Customer ID:

<li>Online Payment</li>
  <li>Client Portal</li>
  <li>To raise a complaints/queries faster without addressing your name.</li>
*  Notice – your queries and complaints will be handled faster if you have your customer ID number handy.  

               </div>
             )
           }
         })()}
   
   
   </div>
   
   <div className='drop' >
   <div onClick={this.toggle3} className="up" >
   <h4>How can I request for disconnection, deactivation and activation of my connection from Airjaldi ?</h4>
   
   {(() => {
           if (this.state.three === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle3} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.three === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
  You can drop a mail at customercare@airjaldi.net or call us on our tull free helpline 1800 121 3648.


         </div>
             )
           }
         })()}
   
   
   </div>
   
                   
   
   
   
     {/* dkmds */}
   
   
   
   
   {/* --------------- */}
 
   {/* --------------- */}
   
  
   
                     </div>
   
   
                     <div className="middle" >
   
   
  
                     <h2>New connections</h2>

   
  
   <div className='drop' >
   <div onClick={this.toggle4} className="up" >
   <h4>What paperwork is required for getting a new connection?</h4>
   
   {(() => {
           if (this.state.four === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.four === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
           1) 2 Passport size photos (self attested)

2) Proof of address ( Aadhar Card, Ration Card, Driving License etc)

3)Customer service agreement and contact form to sign up.


               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   <div className='drop' >
   <div onClick={this.toggle5} className="up" >
   <h4>How do I upgrade/downgrade my subscription plan ?</h4>
   
   {(() => {
           if (this.state.five === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.five === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
           Upgrading is anytime. Once your payments towards the upgrade comes through you are good to go with the upgraded plan.
However, you can only downgrade when your plan expires, which is mostly at the end of month. Your new downgraded plan will begin as of the 1st day of the requested month.

               </div>
             )
           }
         })()}
   
   
   </div>
   
   

   
   {/* --------------- */}
   

   
   
                     </div>
   
     <div className="middle" >
   
   
  
            <h2>Troubleshooting</h2>


     {/* dkmds */}
   
  
   
   {/* --------------- */}
   
   <div className='drop' >
   <div onClick={this.toggle6} className="up" >
   <h4>     Internet is not working or no internet connection.</h4>
   
   {(() => {
           if (this.state.six === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.six === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >

<li>Check to see if receiver device and wifi router are all powered on or turned on properly.</li>
<li>Make sure your switches connected to the internet devices are not burnt and are in working condition.</li>
<li>If they are on, check for loose cables to the connecting devices on the adaptor and wireless device.</li>
<li>Check your antenna/receiver for direction and make sure they are not loosely installed.</li>
<li>Check if your cables are not cut or you suspect water in the cable.</li>
<li>Try restarting all the network equipment and see if it works.</li>
<li>If your Internet still doesn’t work, call our tull free helpline 1800 121 3648.</li>
               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   <div className='drop' >
   <div onClick={this.toggle7} className="up" >
   <h4> What to do when your Internet connection underperforms/slow ?</h4>
   
   {(() => {
           if (this.state.seven === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i onClick={this.toggle7} class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.seven === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
     <ul>   Reboot all your internet devices </ul>
     <ul>Check your antenna is not loosely installed.</ul>
<ul>Check if you have exceeded your data limit according to your plan.(Every client of Airjaldi is given client portal to check their daily, weekly, monthly and yearly data usage and their monthly invoices. Clients are also given Client ID and password to access their client portal at http://billing.airjaldi.net/customer_portal</ul>
    <ul>If it is still slow, call our tull free helpline – 1800 121 3648</ul>
               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   {/* --------------- */}
   
   
                     </div>
   
                     <div className="middle" >
   
   
  

   
  <h2>Payment</h2>
   
   <div className='drop' >
   <div onClick={this.toggle8} className="up" >
   <h4> How can I pay ?</h4>
   
   {(() => {
           if (this.state.eight === true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.eight === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
  Payments can be made via net-banking/Online payment mode not later than 11th day of each month.

 <li>Net-banking</li>
 <li>Online payment : There is “make a payment” link on the top of our website</li>
 <li>Cash/Cheque payment to our local office or via field team member with proper receipt No.</li>
 <li>Make sure you have a proper receipt No/UTR No or transaction id.</li>
Further contact us on our tull free helpline 1800 121 3648

               </div>
             )
           }
         })()}
   
   
   </div>
   

   <div className='drop' >
   <div onClick={this.toggle9} className="up" >
   <h4>Payment Terms</h4>
   
   {(() => {
           if (this.state.nine=== true) {
             return (
               <i  class="fas fa-angle-down"></i>
             )
           } else {
             return (
               <i class="fas fa-angle-right"></i>
             )
           }
         })()}
   
   
   
     
   
   </div>
   
   {(() => {
           if (this.state.nine === true) {
             return (
              null
             )
           } else {
             return (
               <div className="down" >
      Your payment date is from 1st – 8th day of every month.  If your payment does not reach us by the 8th day of each month, we normally give a three-day grace period.  By the 11thof every month if payments are not made our server will automatically deactivate your account.

               </div>
             )
           }
         })()}
   
   
   </div>
   
   
   
                     </div>
   
   
                    
              </div>
      
      
                            
   
   
   
                 
          
         
      
                           
   
   
                  
              </div>
        
    
           
                 
                  







  
              


            
                
                  
            </Section>


         



            </React.Fragment>
        )
    }
}