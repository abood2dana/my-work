"use client";
import Image from 'next/image'
 import react, {useTransition,useState} from 'react';
import Tabbutton from './tabbutton';
import { Content } from 'next/font/google';

const Tab_Data= [
  {
    title:"SKILLS",
    id:"SKILLS",
    Content:(
      <ul className='list-disc pl-2'>
        <li>node.js</li>
        <li>React</li>
        <li>javascript</li>
        <li>sql</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"Education",
    Content:(
      <ul className='list-disc pl-2'>
        <li>node.js</li>
        <li>React</li>
        <li>javascript</li>
        <li>sql</li>
      </ul>
    )
  },
  {
  title:"Experience",
  id:"Experience",
  Content:(
    <ul className='list-disc pl-2'>
      <li>node.js</li>
      <li>React</li>
      <li>javascript</li>
      <li>sql</li>
    </ul>
  )
},
]

const AboutSection = () => {
  const[tab,settab]= useState("SKILLS");
  const[ispending,starttransition]= useTransition();
 
  const handletabchange = (id) =>{
    starttransition (() =>{
    settab (id);
    })
  }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src="/images/7.jpg"width={500} height={500}/>
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
            <p className=' text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, qui hic. Iusto maxime totam quae ut, quam omnis! Inventore dignissimos aliquid doloremque, consequatur veritatis voluptate assumenda impedit eligendi quod asperiores.</p>
            <div className=' flex flex-row justify-start mt-8'>
           
           <Tabbutton selecttab ={()=> handletabchange("SKILLS") } active={tab ==="SKILLS"}>
           {""}SKILLS{""}
           </Tabbutton>

           <Tabbutton selecttab ={()=> handletabchange("Education") } active={tab ==="Education"}>
           {""}Education{""}
           </Tabbutton>

           <Tabbutton selecttab ={()=> handletabchange("Experience") } active={tab ==="Experience"}>
           {""}Experience{""}
           </Tabbutton>
            </div>
           <div className='mt-8'>
            {Tab_Data.find((t)=>t.id === tab).Content}
           </div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection