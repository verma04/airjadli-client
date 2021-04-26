import React from 'react'
import Masonry from "react-responsive-masonry"
import { useEffect , useState} from 'react'
import Image from 'next/image'

const months = [

  {
 
    width:'30%',
    height:'20rem'
  },
  {

    width:'50%',
    height:'20rem'
  },
  {

    width:'50%',
    height:'30rem'
  },
  {

    width:'40%',
    height:'25rem'
  },
  {

    width:'40%',
    height:'20rem'
  },

];


function List({list , active }) {
  


    const [  del , setdel] = useState(false);
    const [  visible , setvisible] = useState(false);
  
   

const dat  =   list.filter(element => element.memberCategory === active)
 const data = dat.sort((a, b) => parseFloat(a.memberCategoryId) - parseFloat(b.memberCategoryId))

  
 const boar  =   list.filter(element => element.memberCategory !== "Member")
  
 
 console.log(boar)
 list = boar.sort(() => Math.random() - 0.5)
 

 const random = Math.floor(Math.random() * months.length);


   if(active === "Board") {
     return (
       <div>
        <div  className="team"  >
<Masonry columnsCount={3} gutter="10px">
{list.map((number) =>  {
 const height = Math.random() * (500 - 350) + 350;

 return (
      <div  style={{height: `${height}px`}} class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={number.memberAvatar} alt="Avatar" />
         <div className="det" > 
          <div className="data" >
                         <h2>{number.memberName}</h2>
                        <span>{number.memberPosition}
    </span>
                      
                         </div>
                         </div>
        </div>
        <div class="flip-card-back">
          <div className="data" >
          <h1>{number.memberName}</h1> 
          
          <p>{number.memberDescription}</p>
    </div>
        </div>
      </div>
    
            </div>
 )
}   
    
           
)}
</Masonry>
<div className="btn" >
                  <button>load more</button>
                </div>
        </div>
   

        <div  className="team-1"  >
<Masonry columnsCount={1} gutter="10px">
{list.map((number) =>  {
 const height = Math.random() * (500 - 350) + 350;

 return (
      <div  style={{height: `${height}px`}} class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={number.memberAvatar} alt="Avatar" />
         <div className="det" > 
          <div className="data" >
                         <h2>{number.memberName}</h2>
                        <span>{number.memberPosition}
    </span>
                      
                         </div>
                         </div>
        </div>
        <div class="flip-card-back">
          <div className="data" >
          <h1>{number.memberName}</h1> 
          
          <p>{number.memberDescription}</p>
    </div>
        </div>
      </div>
    
            </div>
 )
}   
    
           
)}
</Masonry>
<div className="btn" >
                  <button>load more</button>
                </div>
        </div>
   
   
       </div>

     )
   }

  
    return (
    <>
            {/* {list.map((number) => 
                  <div className="list" >
     <h2> {number.position}</h2> 

     <div className="icon" >

     {del === number._id &&
      
      <div id="myModal" class="modal">


<div class="modal-content-1">
        <div  className="text" > Do you  want to delete News ?  </div>
    
       <div className="btn" >
         <button  onClick={() => deleteMember(number._id , setdel) }  >Delete</button>
         <button onClick={() => setdel(false) }  >Cancel</button>

         </div>
     </div> 
     </div>

   }
     <i onClick={() => deletecat(number._id) }  className="fas fa-trash"></i>
 <i onClick={() =>  toggleMenu(number._id)} className="fas fa-edit"></i>

 

         </div>
                      </div>
            )} */}



<div  className="team"  >
<Masonry columnsCount={3} gutter="10px">
{data.map((number) =>  {
 const height = Math.random() * (500 - 350) + 350;

 return (
      <div  style={{height: `${height}px`}} class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={number.memberAvatar} alt="Avatar" />
         <div className="det" > 
          <div className="data" >
                         <h2>{number.memberName}</h2>
                        <span>{number.memberPosition}
    </span>
                      
                         </div>
                         </div>
        </div>
        <div class="flip-card-back">
          <div className="data" >
          <h1>{number.memberName}</h1> 
          
          <p>{number.memberDescription}</p>
    </div>
        </div>
      </div>
    
            </div>
 )
}   
    
           
)}
</Masonry>
<div className="btn" >
                  <button>load more</button>
                </div>
        </div>
   
   
      </>
    )
}

export default List
