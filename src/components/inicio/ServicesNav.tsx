import React, { useState } from 'react'

import { servicesNavList } from '../../constants'
import './servicesNav.css'
interface service{
    id: number;
    title: string;
    icon:ImageMetadata;
    selectedIcon:ImageMetadata;
}

const ServicesNav = () => {
    const [iconNumber, setIconNumber] = useState(0)

    const selected = (id:number)=>{
        setIconNumber(id)
    }
    const unselected = (id:number)=>{
        setIconNumber(0)
    }

    
  return (

        <div className="mb-4 grid grid-cols-6 w-full  ">
            {
                servicesNavList.map((service:service)=>(
      
                        <button 
                            key={service.id} 
                            type="button"
                            onMouseOver={()=>selected(service.id)}
                            onMouseLeave={()=>unselected(service.id)}
                            onClick={()=>unselected(service.id)}
                  
                            className='bg-mainBlue hover:bg-white p-10 w-full flex justify-center buttonStyle'
                        >
                                <img 
                                    className="items-start h-24" 
                                    src={ iconNumber == service.id ? service.selectedIcon.src : service.icon.src} 
                                    alt={'marker'} 
                                /> 
                        </button>



              
                ))
            }
        </div>



  )
}

export default ServicesNav