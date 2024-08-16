"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"
function Herosection() {
  return (
    <section className='lg:py-16'>
      < div className='grid grid-cols-1 sm:grid-cols-12 '>
        
        <motion.div initial={{opacity:0,scale:0}}
       animate={{opacity:1,scale:1}}
       transition={{duration:0.5}}
        className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
        <h1 className='text-white mb-4 text-4xl sm-text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-t from-blue-800 via-blue-500'>Hello,i'm{""}</span>
          <br></br>
          <TypeAnimation
       sequence={[
        // Same substring at the start will only be typed out once, initially
        'abd alrhman',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web dveloper',
        1000,
        'Graphic Design',
        1000,
        'back-end devloper',
        1000
       ]}
       wrapper="span"
       speed={50}
       style={{ fontSize: '1em', display: 'inline-block' }}
       repeat={Infinity}
          />
          </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed saepe aliquam architecto quidem odio, commodi veritatis repellendus possimus ratione ipsam error.
           Neque incidunt iure consequuntur sit laudantium maiores alias. Officia.

        </p>
        <div>   
          <button className='px-6 py-3  w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-blue-500 hover:bg-slate-200 text-white'>Hire me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-slate-100 hover:bg-slate-800 text-white  mt-3 ' >
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
          </button>
         </div>
        </motion.div>
        <motion.div nitial={{opacity:0,scale:0}}
       animate={{opacity:1,scale:1}}
       transition={{duration:0.5}} className='col-span-4 place-self-center mt-4 lg:mt-0 '>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative '>
        <Image
        src="/images/1.png"
        alt='hero image'
        className=' absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  '
        width={300}
        height={300}
        />
        </div>
        </motion.div>
        </div>
    </section>
  )
}

export default Herosection