import { useState } from "react";
import { PERSONNES } from "./InformatiosPersone";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import './style.css'
export function Carrousels(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMouse, setIsMouse] = useState(true)
    const prevSlide = () =>{
        setCurrentIndex((prevIndex)=>
        prevIndex === 0 ? PERSONNES.length - 1 : prevIndex - 1
       );
    };
    const nextSlide = () =>{
        setCurrentIndex((prevIndex)=>
        prevIndex === PERSONNES.length - 1 ? 0 : prevIndex + 1
       )
    }
    
    return(
        
      <div className="class-second relative py-20 bg- w-full max-w-4xl mx-auto">
        <div className="overflow-hidden relative">
         <div className="flex transition-transform duration-500 ease-out"
         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
         {
            PERSONNES.map((pers) =>{ 
                return(
                 <div key={pers.id} className="classe-fist flex min-w-full">
                  <img src={pers.img} className="rounded  w-[50%] max-w-xl h-96 object-cover" alt={pers.title} />
                  <div className="classe-text px-6 pt-10 w-[50%]">
                   <span className="font-medium">-{pers.profils}</span>
                   <h2 className="text-2xl font-bold">{pers.title}</h2>
                   <p className="text-gray-700 text-2xl">{pers.content}</p>
                   <p className="text-lg font-medium"><span className="font-bold">Author</span> {pers.auteur}</p>
                   <p className="text-lg font-medium"><span className="font-bold">Author</span> {pers.niveau}</p>
                  </div>
                </div>
                );
                
            })
         }
         </div>
          <div>
            <button 
            onClick={prevSlide} 
            onMouseEnter={()=>setIsMouse(true)}
            onMouseLeave={()=>setIsMouse(false)}
            style={{color: isMouse ? "red":""}}
            className="bg-gray-800 rounded-xl m-2 p-2 text-white text-2xl"
            >  
                <FaArrowLeft />
            </button>
            <button onClick={nextSlide} className="px-6 bg-gray-800 rounded-xl m-2 p-2 text-white text-2xl">
                <FaArrowRight />
            </button>
          </div>
         </div>
      </div>
      
    );
}

