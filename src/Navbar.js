import React, { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [show,setshow]=useState(false)

    useEffect(()=>{
          //to check events happen or not
          window.addEventListener('scroll',()=>{
            if(window.scrollY>250){
                setshow(true)
            }else{
                setshow(false)
            }
          }) 
    },[])
    // console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img className='logo' 
        src='https://imgs.search.brave.com/cAIJhKNIeucGn-z22p5C0yMvjZk0aeO6n_xLhHHLtrU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy80L05ldGZs/aXgtTG9nby1IRC5w/bmc'/>
    </div>
  )
}

export default Navbar