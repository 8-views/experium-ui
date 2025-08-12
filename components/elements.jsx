import React from 'react'
import { experiumImageUrl } from '@/utils/common';
import Image from 'next/image'

const Elements = () => {
  return (
  

<>


    <div className=' relative bg-cream  bg-contain  bg-no-repeat h-[100%] '  >

  <img src={experiumImageUrl('elements-tab.png')}  alt="Elements" className='img-fluid  hidden sm:block md:hidden ' />
  <img src={experiumImageUrl('elements-mobile.png')}  alt="Elements" className='img-fluid "block sm:hidden ' />
    
  <img src={experiumImageUrl('elements.png')}  alt="Elements" className='img-fluid  hidden md:block w-full  lg:d-block d-hidden      ' />
 <video
   
        className="sm:h-[70] sm:w-[135] h-[60] sm:w-[100] mix-blend-multiply absolute left-25 lg:left-70 top-1/2 transform -translate-y-1/2"
        muted
        preload="none"
        playsInline
        loop
    
        autoPlay
      >
        <source
          src="https://11views.com/experium-assets/butterflies.mp4"
          type="video/mp4"
        />
       
        Your browser does not support the video tag.
      </video>



    </div>
    
  

    {/* <div className='bg-cream  h-[306px] flex items-center justify-center'>
      
    </div> */}

</>
  )
}

export default Elements