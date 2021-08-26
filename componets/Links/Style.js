import styled from 'styled-components'




export const Section = styled.section`
  h1 {
        font-weight: 1000; 
       }
       strong {
        font-weight: 1000; 
       }

       ol {
         li {
           list-style: decimal-leading-zero;
         }
       }
 @media (min-width: 1281px) {
   margin-top: 3rem;
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   a {
     color:#1690d2;;
   }
   .flex {
     margin-top:12vh;
     width:75rem;
     height:76%;
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;

          #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}
 
#customers tr:nth-child(1){background: #1690d2;
td {
  color:  white;
}
td:nth-child(2){
  width: 15rem;

}
}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
   
          .head {
              text-align:left;
              font-size:2.5rem;
              font-weight:1000;
          }
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
                width:100%;
              }
          }
          p {
            text-align:left;
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:100%;
              margin-top:0.7rem;
              margin-bottom:0.5rem;
          }
          h2 {
            font-weight:900;
          }
          h1 {
              margin-top:2rem;
              margin-bottom:0.9rem;
          }
          li {
              list-style:disc;
              margin-left:1.5rem;
              font-size:1.2rem;
              margin-top:0.5rem;
              margin-bottom:0.5rem;
          }
     }
   }
   .btn {
       position:fixed;
       right:2%;
       top:12vh;
     
       display:flex;
       justify-content:center;
        flex-direction:column;
        button {
            width:10rem;
            margin-top:2rem;
            font-size:1.5rem;
        }
    
   }
 }

 @media (min-width: 1024px) and (max-width: 1280px)  {
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
     margin-top:12vh;
     width:76%;
     height:76%;
    
     .single-post{
       strong{
         font-weight: 1000;
       }
       h1 {
        font-weight: 1000; 
       }
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;

          #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}
 
#customers tr:nth-child(1){background: #1690d2;
td {
  color:  white;
}
td:nth-child(2){
  width: 15rem;

}
}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
   
          .head {
              text-align:left;
              font-size:2.5rem;
              font-weight:1000;
          }
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
                width:100%;
              }
          }
          p {
            text-align:left;
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:100%;
              margin-top:0.7rem;
              margin-bottom:0.5rem;
          }
          h2 {
            font-weight:900;
          }
          h1 {
              margin-top:2rem;
              margin-bottom:0.9rem;
          }
          li {
              list-style:disc;
              margin-left:1.5rem;
              font-size:1.2rem;
              margin-top:0.5rem;
              margin-bottom:0.5rem;
          }
     }
   }
   .btn {
       position:fixed;
       right:2%;
       top:12vh;
     
       display:flex;
       justify-content:center;
        flex-direction:column;
        button {
            width:10rem;
            margin-top:2rem;
            font-size:1.5rem;
        }
    
   }
 }

 @media (min-width: 768px) and (max-width: 1024px) {

  display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex {
     margin-top:12vh;
     width:80%;
     height:76%;
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;

          #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}
 
#customers tr:nth-child(1){background: #1690d2;
td {
  color:  white;
}
td:nth-child(2){
  width: 15rem;

}
}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
   
          .head {
              text-align:left;
              font-size:2.5rem;
              font-weight:1000;
          }
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
                width:100%;
              }
          }
          p {
            text-align:left;
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:100%;
              margin-top:0.7rem;
              margin-bottom:0.5rem;
          }
          h2 {
            font-weight:900;
          }
          h1 {
              margin-top:2rem;
              margin-bottom:0.9rem;
          }
          li {
              list-style:disc;
              margin-left:1.5rem;
              font-size:1.2rem;
              margin-top:0.5rem;
              margin-bottom:0.5rem;
          }
     }
   }
   .btn {
       position:fixed;
       right:2%;
       top:12vh;
     
       display:flex;
       justify-content:center;
        flex-direction:column;
        button {
            width:10rem;
            margin-top:2rem;
            font-size:1.5rem;
        }
    
   }
 }
 @media (max-width: 767px) {
   display:flex;
   justify-content:center;
   align-items: center;
   width:100%;
   height:100%;
   margin-top: 5rem;
   .flex {
    margin-top: 3%;
     width:95%;
   
    
     .single-post{
         display:flex;
         justify-content:center;
          flex-direction:column;
          width:100%;
          height:100%;
     

          #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
  border: 1px solid red;

}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}
 
#customers tr:nth-child(1){background: #1690d2;
td {
  color:  white;
}
td:nth-child(3){


}
}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
   
          .head {
              text-align:left;
              font-size:2.5rem;
              font-weight:1000;
          }
          figure {
              width:100%;
          
              display:flex;
              justify-content:center;
              img {
                width:100%;
              }
          }
          p {
            text-align:left;
              font-size:1.2rem;
              margin-bottom:0.5rem;
              width:100%;
              margin-top:0.7rem;
              margin-bottom:0.5rem;
          }
          h2 {
            font-weight:900;
          }
          h1 {
              margin-top:2rem;
              margin-bottom:0.9rem;
          }
          li {
              list-style:disc;
              margin-left:1.5rem;
              font-size:1.2rem;
              margin-top:0.5rem;
              margin-bottom:0.5rem;
          }
     }
   }
   .btn {
       position:fixed;
       right:2%;
       top:12vh;
     
       display:flex;
       justify-content:center;
        flex-direction:column;
        button {
            width:10rem;
            margin-top:2rem;
            font-size:1.5rem;
        }
    
   }
 }
`