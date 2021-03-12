
import styled from 'styled-components'
export const  Section = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
height:100%;

@media (min-width: 1035px) {
    margin-top:10rem;

    .top {

        width:80%;
        height:40rem;
        
        position: relative;

    }

    .data {
margin-top:4rem;
width:80%;


position: relative;
display:flex;
justify-content:space-between;
.left {
    width:68%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    h2 {
        width:95%;
        margin-top:1rem;
        font-weight:1000;
    }
    p {
        width:95%;
        margin-top:1rem;
    }
}

.right {
    width:28%;

    display:flex;
    justify-content:flex-start;
    flex-direction:column;

    .img {
        width:90%;
        height:15rem;
        margin-top:2%;
        position: relative;
    }
    
}

}

  

}

@media (max-width: 600px) {

    margin-top:5rem;

.top {

    width:90%;
    height:24rem;
    
    position: relative;

}

.data {
margin-top:4rem;
width:90%;


position: relative;
display:flex;
justify-content:space-between;
flex-direction:column;
.left {
width:95%;
display:flex;
justify-content:flex-start;
flex-direction:column;
h2 {
    width:100%;
    margin-top:1rem;
    font-weight:1000;
}
p {
    width:100%;
    margin-top:1rem;
}
}

.right {
width:95%;

display:flex;
justify-content:space-between;


.img {
    width:48%;
    height:8rem;
    margin-top:2%;
    position: relative;
}

}

}


}
`