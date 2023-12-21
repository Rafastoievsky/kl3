
import { useState, type FC, useEffect } from 'react';
import {leftArrow, rightArrow} from '../../assets'

interface Props{
    slides:any[]
}


const Slider: FC<Props> = ({ slides }) => {
   
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<any | undefined>(undefined);

    useEffect(() => {
      setSelectedImage(slides[0].src)
  }, [])

    useEffect(() => {
        setSelectedImage(slides[0].src)
    }, [slides])
    
  
    const selectNewImage = (index: number, images: any[], next: boolean) => {
      let nextIndex;
      if (next) {
        nextIndex = index === images.length - 1 ? 0 : index + 1;
      } else {
        nextIndex = index === 0 ? images.length - 1 : index - 1;
      }
      setSelectedImage(images[nextIndex].src);
      setSelectedIndex(nextIndex);
    };
  
    const previous = () => {
      selectNewImage(selectedIndex, slides, false);
    };
  
    const next = () => {
      selectNewImage(selectedIndex, slides, true);
    };


  return (
    <div className='overflow-hidden relative'>
        <div className='flex'><img src={selectedImage} alt="Images" /></div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={previous} className='opacity-50 shadow rounded-full bg-gray-300 text-gray-800 hover:opacity-90'>
                <img src={leftArrow.src} alt="left" className='md:w-12 w-8' />    
            </button>
            <button  onClick={next} className='opacity-50 shadow rounded-full bg-gray-300 text-gray-800 hover:opacity-90'>
                <img src={rightArrow.src} alt="left" className='md:w-12 w-8' />    
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {
                    slides.map((_,i)=>(
                        <div key={i} className={` trasition-all bg-gray-50 rounded-full md:w-3 md:h-3 w-2 h-2 ${selectedIndex === i ? "p-2" :"bg-opacity-50"}`}></div>   
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Slider