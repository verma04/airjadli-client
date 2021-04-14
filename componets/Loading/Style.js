import styled from 'styled-components'



export const Section = styled.nav`
@media (min-width: 1025px) {
    position:fixed;
    position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  .flex {
      width:100%;
      height:20%;
      
   display:flex;
   justify-content:center;
flex-direction:column;
align-items:center;
.img {
    display:flex;
   justify-content:center;
    img {
        width:30%;
        
    }
  
}
.text {
    text-align:center;
    line-height:1.6;
    color: ${props => props.theme.colors.text1};
}
.spinner {
    display:flex;
   justify-content:center;
         img {
             width:50%;
         }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
    position:fixed;
    position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  .flex {
      width:100%;
      height:20%;
      
   display:flex;
   justify-content:center;
flex-direction:column;
align-items:center;
.img {
    display:flex;
   justify-content:center;
    img {
        width:30%;
        
    }
  
}
.text {
    text-align:center;
    line-height:1.6;
    color: ${props => props.theme.colors.text1};
}
.spinner {
    display:flex;
   justify-content:center;
         img {
             width:50%;
         }
    }
  }
}
`

