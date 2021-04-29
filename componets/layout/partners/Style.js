import styled from 'styled-components'




export const  Item = styled.div`
  display:flex;
   justify-content:center;
   flex-direction:column;
   margin-top:5rem;
   
   .center{
     width:100%;
   }
   
   @media (max-width: 767px) {
    display:flex;
   justify-content:center;
   flex-direction:column;
   margin-top:3rem;
   align-items:center;
    .head {
       display:flex;
       justify-content:flex-start;
     width:90%;
     margin-bottom:2rem;

   h2 {
    font-size: 1.75rem;
    color:${props => props.theme.colors.blue};
   }
   }
    .center{
  
     width:100%;
     .img-wrapper {
       display:flex;
        justify-content:center;
        
        margin-bottom:1rem;
        #border {
          border-radius:50%;
        }
       img {
         position:relative;
       
  width:50%;
  height:50%;
  
  background-color: rgba(0,0,0,0.5);
  
       }
   
       .fade {
        top:6rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         font-size:1.3rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
        } 
   }
   }

   @media (min-width: 768px) and (max-width: 1024px) {
    display:flex;
   justify-content:center;
    align-items:center;

   .head {
       display:flex;
       justify-content:flex-start;
     width:80%;
     margin-bottom:2rem;

   h2 {
    font-size: 1.75rem;
    color:${props => props.theme.colors.blue};
   }
   }
  
   .center{
    margin-top:5rem;
     width:100%;
   
     .img-wrapper {
       display:flex;
        justify-content:center;
        
        #border {
          border-radius:50%;
        }
       
       img {
         position:relative;
       
  width:80%;
  height:100%;
  
  background-color: rgba(0,0,0,0.5);
  -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          transition: 1s all ease-in-out; 
       }
   
       .fade {
        top:10rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         font-size:2rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
        } 
   }
    
    .center1 {
      display:flex;
      justify-content:space-between;
   .card{ 
        background-color: #fff; 
        height: auto; 
        width: auto; 
        overflow: hidden; 
        margin: 12px; 
        border-radius: 5px; 
        box-shadow: 9px 17px 45px -29px
                    rgba(0, 0, 0, 0.44); 
    } 
   
    /* Card image loading */
    .card__image img { 
        width: 100%; 
        height: 100%; 
    } 
      
    .card__image.loading { 
        height: 300px; 
        width: 400px; 
    } 
   
    /* Card title */
    .card__title { 
        padding: 8px; 
        font-size: 22px; 
        font-weight: 700; 
    } 
      
    .card__title.loading { 
        height: 1rem; 
        width: 50%; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* Card description */
    .card__description { 
        padding: 8px; 
        font-size: 16px; 
    } 
      
    .card__description.loading { 
        height: 3rem; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* The loading Class */
    .loading { 
        position: relative; 
        background-color: #e2e2e2; 
    } 
   
    /* The moving element */
    .loading::after { 
        display: block; 
        content: ""; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-100%); 
        background: -webkit-gradient(linear, left top, 
                    right top, from(transparent),  
                    color-stop(rgba(255, 255, 255, 0.2)), 
                    to(transparent)); 
                      
        background: linear-gradient(90deg, transparent, 
                rgba(255, 255, 255, 0.2), transparent); 
   
        /* Adding animation */
        animation: loading 0.8s infinite; 
    } 
   
    /* Loading Animation */
    @keyframes loading { 
        100% { 
            transform: translateX(100%); 
        } 
    } 
  
    }
      }
    
  
      @media (min-width: 1024px) and (max-width: 1280px)  {
   display:flex;
   justify-content:center;
    align-items:center;

   .head {
       display:flex;
       justify-content:flex-start;
     width:80%;
     margin-bottom:2rem;

   h2 {
    font-size: 1.75rem;
    color:${props => props.theme.colors.blue};
   }
   }
  
   .center{
    margin-top:5rem;
     width:100%;
   
     .img-wrapper {
       display:flex;
        justify-content:center;
        
       
       
       img {
         position:relative;
       
  width:80%;
  height:100%;
  
  background-color: rgba(0,0,0,0.5);
  -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          transition: 1s all ease-in-out; 
       }
       #border {
          border-radius:50%;
        }
   
       .fade {
        top:10rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         font-size:2rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
        } 
   }
    
    .center1 {
      display:flex;
      justify-content:space-between;
   .card{ 
        background-color: #fff; 
        height: auto; 
        width: auto; 
        overflow: hidden; 
        margin: 12px; 
        border-radius: 5px; 
        box-shadow: 9px 17px 45px -29px
                    rgba(0, 0, 0, 0.44); 
    } 
   
    /* Card image loading */
    .card__image img { 
        width: 100%; 
        height: 100%; 
    } 
      
    .card__image.loading { 
        height: 300px; 
        width: 400px; 
    } 
   
    /* Card title */
    .card__title { 
        padding: 8px; 
        font-size: 22px; 
        font-weight: 700; 
    } 
      
    .card__title.loading { 
        height: 1rem; 
        width: 50%; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* Card description */
    .card__description { 
        padding: 8px; 
        font-size: 16px; 
    } 
      
    .card__description.loading { 
        height: 3rem; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* The loading Class */
    .loading { 
        position: relative; 
        background-color: #e2e2e2; 
    } 
   
    /* The moving element */
    .loading::after { 
        display: block; 
        content: ""; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-100%); 
        background: -webkit-gradient(linear, left top, 
                    right top, from(transparent),  
                    color-stop(rgba(255, 255, 255, 0.2)), 
                    to(transparent)); 
                      
        background: linear-gradient(90deg, transparent, 
                rgba(255, 255, 255, 0.2), transparent); 
   
        /* Adding animation */
        animation: loading 0.8s infinite; 
    } 
   
    /* Loading Animation */
    @keyframes loading { 
        100% { 
            transform: translateX(100%); 
        } 
    } 
  
    }
      }



      @media (min-width: 1281px)   {
   display:flex;
   justify-content:center;
    align-items:center;

   .head {
       display:flex;
       justify-content:flex-start;
     width:75rem;
     margin-bottom:2rem;

   h2 {
    font-size: 1.75rem;
    color:${props => props.theme.colors.blue};
   }
   }
  
   .center{
    margin-top:5rem;
    width:75rem;
   
     .img-wrapper {
       display:flex;
        justify-content:center;
        
        #border {
          border-radius:50%;
        }
       
       img {
         position:relative;
       
  width:80%;
  height:100%;
  
       }
   
       .fade {
        top:10rem;
        position:absolute;
        
       h2 {
        
       
         left:6rem;
         
         color:white;
         font-weight:1000;
         font-size:2rem;
       }
     }
     }
     .img-wrapper:hover img { 
            transform: scale(1.1); 
        } 
   }
    
    .center1 {
      display:flex;
      justify-content:space-between;
   .card{ 
        background-color: #fff; 
        height: auto; 
        width: auto; 
        overflow: hidden; 
        margin: 12px; 
        border-radius: 5px; 
        box-shadow: 9px 17px 45px -29px
                    rgba(0, 0, 0, 0.44); 
    } 
   
    /* Card image loading */
    .card__image img { 
        width: 100%; 
        height: 100%; 
    } 
      
    .card__image.loading { 
        height: 300px; 
        width: 400px; 
    } 
   
    /* Card title */
    .card__title { 
        padding: 8px; 
        font-size: 22px; 
        font-weight: 700; 
    } 
      
    .card__title.loading { 
        height: 1rem; 
        width: 50%; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* Card description */
    .card__description { 
        padding: 8px; 
        font-size: 16px; 
    } 
      
    .card__description.loading { 
        height: 3rem; 
        margin: 1rem; 
        border-radius: 3px; 
    } 
   
    /* The loading Class */
    .loading { 
        position: relative; 
        background-color: #e2e2e2; 
    } 
   
    /* The moving element */
    .loading::after { 
        display: block; 
        content: ""; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-100%); 
        background: -webkit-gradient(linear, left top, 
                    right top, from(transparent),  
                    color-stop(rgba(255, 255, 255, 0.2)), 
                    to(transparent)); 
                      
        background: linear-gradient(90deg, transparent, 
                rgba(255, 255, 255, 0.2), transparent); 
   
        /* Adding animation */
        animation: loading 0.8s infinite; 
    } 
   
    /* Loading Animation */
    @keyframes loading { 
        100% { 
            transform: translateX(100%); 
        } 
    } 
  
    }
      }
    
`