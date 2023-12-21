import React, { useEffect, useState } from 'react'

import { servicesNavList } from '../../constants'
import './servicesNav.css'
import ServicesInfo from './ServicesInfo';
interface service{
    id: number;
    title: string;
    icon:ImageMetadata;
    selectedIcon:ImageMetadata;
    picture: ImageMetadata;
    subtitle: string;
    descripcion:string
}

const ServicesNav = () => {
    const [iconNumber, setIconNumber] = useState(0)
    const [serviceData, setServiceData] = useState<service>(servicesNavList[0])



    const selected = (id:number)=>{
        setIconNumber(id)
        const selectedService = servicesNavList.find((item)=>{
            return item.id == id
        })
        if (selectedService) {
            setServiceData(selectedService)
            
        }else{
            setServiceData(servicesNavList[0])
        }
    }
    const unselected = (id:number)=>{
        setIconNumber(0)
    }
    const overSelected = (id:number)=>{
        setIconNumber(id)
    }

    
  return (
    <div>
        <div className="mb-4 md:grid grid-cols-6 w-full bg-[#E8EBEF] hidden">
            {
                servicesNavList.map((service:service)=>(
      
                        <button 
                            key={service.id} 
                            type="button"
                            onMouseOver={()=>overSelected(service.id)}
                            onMouseLeave={()=>unselected(service.id)}
                            onClick={()=>selected(service.id)}
                  
                            className={` text-mainBlue text-2xl font-bold hover:bg-white 
                            p-10 w-full flex justify-center buttonStyle 
                            ${ (iconNumber || serviceData.id) == service.id ? 'bg-white' : 'bg-mainBlue'}`}
                        >
                            {(iconNumber || serviceData.id) == service.id ? service.title : null}
                                <img 
                                    className="items-start h-24 ml-2" 
                                    src={ (iconNumber || serviceData.id) == service.id ? service.selectedIcon.src : service.icon.src} 
                                    alt={'marker'} 
                                /> 
                        </button>



              
                ))
            }
        </div>
        <div className="mb-4 grid grid-cols-6 w-full bg-[#E8EBEF] md:hidden">
            {
                servicesNavList.map((service:service)=>(
      
                        <button 
                            key={service.id} 
                            type="button"
                            onMouseOver={()=>overSelected(service.id)}
                            onMouseLeave={()=>unselected(service.id)}
                            onClick={()=>selected(service.id)}
                  
                            className={` text-mainBlue text-2xl font-bold hover:bg-white 
                            p-2 w-full flex justify-center buttonStyle 
                            ${ (iconNumber || serviceData.id) == service.id ? 'bg-white' : 'bg-mainBlue'}`}
                        >
                                <img 
                                    className="h-10" 
                                    src={ (iconNumber || serviceData.id) == service.id ? service.selectedIcon.src : service.icon.src} 
                                    alt={'marker'} 
                                /> 
                        </button>



              
                ))
            }
        </div>
            <ServicesInfo data={serviceData} />

    </div>



  )
}

export default ServicesNav