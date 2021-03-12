import React from 'react'
import {News} from './Style'
import Image from 'next/image'
<style jsx>{`
#myImage {
  width: 64px;
}
`}</style>
const Navbar = () => {
    return (
        <News>
            <div className="flex" >
           
           <h2>Join Our Newsletter List for Updates & Special Offers</h2>
           <button>Get the newsletter</button>
            </div>
        </News>
    )
}

export default Navbar
