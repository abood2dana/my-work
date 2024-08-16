"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import Projectcard from './Projectcard'
import { animate, motion, useInView } from 'framer-motion'
const Projectsdata =[
    {
        id:1,
        title:"potography portfolio website",
        description :"project 2 ",
        Image:"/images/2.png",
        tag:["ALL","web"],
        gitUrl:"/",
        previewUrl: "/"
        
    },
    {
        id:2,
        title:"potography portfolio website",
        description :"project 2 ",
        Image:"/images/3.png",
        tag:["ALL","web"],
                gitUrl:"/",
        previewUrl: "/"
    },
    {
        id:3,
        title:"potography portfolio website",
        description :"project 3 ",
        Image:"/images/4.png",
        tag:["ALL","web"],
                gitUrl:"/",
        previewUrl: "/"
    },
    {
        id:4,
        title:"potography portfolio website",
        description :"project 4 ",
        Image:"/images/5.png",
        tag:["ALL","web"],
                gitUrl:"/",
        previewUrl: "/"
    },
    {
        id:5,
        title:"potography portfolio website",
        description :"project 5 ",
        Image:"/images/6.png",
        tag:["ALL","web"],
                gitUrl:"/",
        previewUrl: "/"
    },
    {
        id:6,
        title:"potography portfolio website",
        description :"project 6 ",
        Image:"/images/5.png",
        tag:["ALL","web"],
                gitUrl:"/",
        previewUrl: "/"
    },
]




const Projectssection = () => {
    const ref=useRef(null)
    const isInView =useInView(ref,{once:true})
    const cardVariants={
    initial:{y:50,opacity:0},
    animate:{y:0, opacity:1 },
 } 
  return (
    <section ref={ref}>    
    <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'> 
        {Projectsdata.map((project,index)=>(
         <motion.li transition={{duration:0.3,delay:index * 0.4}} key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate":"initial"} >
        <Projectcard key={project.id} 
        title={project.title}
         description={project.description} 
         imgurl={project.Image} tags={project}
          gitUrl ={project.gitUrl}
           previewUrl={project.previewUrl}  /> </motion.li> ))} </div>
    
    </section>

  )
}

export default Projectssection