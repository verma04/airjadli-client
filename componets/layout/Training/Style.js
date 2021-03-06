

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1281px) {
    
  
    .grid {
        
   position: relative;
        width:100%;
        height:40rem;
        .bird {
        top: 6%;
    height: 70rem;
    z-index:100;
    width: 39%;
    left: 5%;
    position: absolute;
    -webkit-transform: rotate( 
1deg
 );
    -ms-transform: rotate( 1deg );
    -webkit-transform: rotate( 
1deg
 );
    -ms-transform: rotate( 1deg );
    transform: rotate( 
1deg
 );


        img {
            width: 96%;
    height: 100%;
        }
    }
       
    }

    

   
    .card {
       z-index:990;
       position:absolute;
       bottom:8%;
       display:flex;
       justify-content:center;
       align-items:center;
       width:100%;
      
       height:70%;
       .card-1 {
           display:flex;
       justify-content:space-between;
       align-items:flex-end;
       height:100%;
       width:75rem;
    
       .grid1 {
         
            width:50%;
         
            background-color:white;
            display:flex;
       justify-content:center;
  
   
       align-items:center;
       h1 {
         padding:1rem;
     
           width:90%;
           text-align:center;
           text-align:center;
   
       }
          
       }
   
   }
   }

  

}

@media (min-width: 1024px) and (max-width: 1280px) {
    
  
    .grid {
        
   position: relative;
        width:100%;
        height:40rem;
        .bird {
        top: 6%;
    height: 70rem;
    z-index:100;
    width: 39%;
    left: 5%;
    position: absolute;
    -webkit-transform: rotate( 
1deg
 );
    -ms-transform: rotate( 1deg );
    -webkit-transform: rotate( 
1deg
 );
    -ms-transform: rotate( 1deg );
    transform: rotate( 
1deg
 );


        img {
            width: 96%;
    height: 100%;
        }
    }
       
    }

    

   
    .card {
       z-index:990;
       position:absolute;
       bottom:8%;
       display:flex;
       justify-content:center;
       align-items:center;
       width:100%;
      
       height:70%;
       .card-1 {
           display:flex;
       justify-content:space-between;
       align-items:flex-end;
       height:100%;
       width:76%;
    
       .grid1 {
         
            width:50%;
         
            background-color:white;
            display:flex;
       justify-content:center;
  
   
       align-items:center;
       h1 {
         padding:1rem;
     
           width:90%;
           text-align:center;
           text-align:center;
   
       }
          
       }
   
   }
   }

  

}
@media (min-width: 768px) and (max-width: 1024px) {

    .grid {
        
        position: relative;
             width:100%;
             height:35rem;
       
            
         }
     
         
     
        
         .card {
             position:absolute;
             bottom:7%;
             display:flex;
             justify-content:center;
             align-items:center;
             width:100%;
            
             height:70%;
             .card-1 {
                 display:flex;
             justify-content:space-between;
             align-items:center;
             height:100%;
             width:80%;
           
             .grid1 {
                  width:50%;
                  height:50%;
                 
                  display:flex;
             justify-content:center;
        
         
             align-items:center;
             h1 {
                padding:1rem;
                background-color:white;
                 width:90%;
                 text-align:center;
                 text-align:center;
         
             }
                
             }
         
         }
         }


}
@media (max-width: 767px) {
    margin-top:20%;
.grid {
  position: relative;
    width:100%;
    height:30rem;


   
}
.card {
    position:absolute;
    bottom:5%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
   
    height:80%;
    .card-1 {
        display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    height:100%;
    width:100%;
  
    .grid1 {
         width:90%;
         height:70%;
         background-color:white;
         display:flex;
    justify-content:center;


    align-items:center;
    h1 {
        background-color:white;
        font-size:1.5rem;
        padding:1rem;
    }
       
    }

}
}



}
`