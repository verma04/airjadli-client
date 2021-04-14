

import styled from 'styled-components'



export const  Section = styled.section`

@media (min-width: 1035px) {
    display:flex;
justify-content:center;
height:100%;
margin-top:5rem;
height:40rem;
max-height:50rem;
 background-color:#ddf3ff;

.flex {
    display:flex;
    justify-content:center;
    width:100%;
    height:100%;
   
    .flex-1 {
     
        width:50%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .head {
            width:100%;
            height:10%;
            display:flex;
            justify-content:flex-start;
            margin-left:50%;
            align-items:flex-end;
            h1 {
                width:35%;
                text-align:left;
                color:${props => props.theme.colors.blue};
                font-weight:1000;
                text-transform:uppercase;
            }
        }
        .data {
            width:100%;
            height:80%;
          
            display:flex;
            justify-content:flex-start;
            align-items:center;
            flex-direction:column;
            justify-content:flex-start;
         
          
            ul {
                margin-left:25%;
                margin-top:1rem;
               
                height:50%;
               
                
                display:flex;
            justify-content:flex-start;
            align-items:flex-start;
            flex-direction:column;
            .top {
                font-size:1.6rem;

            }
            li {
                margin-top:0.5rem;
                font-size:1.4rem;
                line-height:1.3;
                text-align:left;
                width:50%;
                span {
                    color:${props => props.theme.colors.blue};
                }

            }
            }
        }
        
    }
    .flex-2 {
        
        width:50%;
        height:100%;
        position: relative;
         iframe {
            width:100%;
            height:100%; 
         }
    }
}
.btn {
    position:  fixed;
    
    top: 12%;
    right: 4%;
    button {
        padding: 0.5rem;
    font-size: 1.3rem
    }
    }
    

  

}

@media (max-width: 600px) {
    display:flex;
justify-content:center;


height:100%;


 background-color:#ddf3ff;

.flex {
    margin-top:3rem;
    z-index: 1;
    display:flex;
    justify-content:center;
    flex-direction:column-reverse;
    width:100%;
    height:100%;
    .flex-1 {
    padding-bottom:2rem;
        width:100%;
        height:30rem;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .head {
            width:100%;
            height:5%;
            display:flex;
            justify-content:center;
            align-items:flex-end;
            h1 {
                width:90%;
                text-align:left;
                color:${props => props.theme.colors.blue};
                font-weight:1000;
                text-transform:uppercase;
            }
        }
        .data {
            width:100%;
            height:80%;
          
            display:flex;
            justify-content:flex-start;
            align-items:center;
            flex-direction:column;
            ul {
                margin-top:1rem;
               
                height:50%;
                width: 90%;
                display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            li {
                margin-top:0.5rem;
                font-size:1.5rem;
                text-align:left;
                width:100%;
                span {
                    color:${props => props.theme.colors.blue};
                }

            }
            }
        }
        
    }
    .flex-2 {
        margin-top:2rem;
        height: 26rem;
    width: 109%;
     
        position: relative;
    }
}

   
 


  

}
`