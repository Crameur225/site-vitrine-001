import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export function AccordeonItem({title, paragraph, techno}){
    const [isOpen, setIsOpen] = useState(false)

 function toggleAccodeon(){
    setIsOpen(!isOpen)
}
 return(
    <>
     <button onClick={toggleAccodeon}>
        <p> <span>{title} {isOpen ? <IoCloseSharp className="inline absolute font-bold text-slate-900 right-[26em]"/> : <FaPlus className="inline absolute right-[26em]"/>}</span>
         <span></span></p>
    </button>
        {
          isOpen && (
             <p className="text-blue-600  pt-10">
                {paragraph}
                <p className="py-4">{techno} </p>
             </p>
            )
             }
                 <hr className="pb-5"/>
    </>
 )
}