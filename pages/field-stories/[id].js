import React from 'react'
import  Blog from '@//componets/layout/Fieldstories/SingleFieldstories/Fieldstories'

function index({query}) {
    return (
        <div>
        
               <Blog  id={query.id}/>
        </div>
    )
}

index.getInitialProps = async ({query}) => {
    return {query};
  }


export default index;