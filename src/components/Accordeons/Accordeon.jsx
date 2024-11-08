
import {INFORMATIONS} from "./AccordeonInfo"
import { AccordeonItem } from "./AccordeonItem";
export function Accordeon(){

    return(
     <div className="w-[60%] h-auto mx-auto py-28">
     <h2 className="text-center text-3xl text-cyan-800 pb-4">Ce qui me motive ?</h2>
     <p className="pb-24 w-[100%] text-center text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia optio a vitae inventore totam quia est ab quasi voluptates maiores beatae,</p>
       {
        INFORMATIONS.map((info)=>{
            return( 
                <AccordeonItem key={info.id} title={info.title} paragraph={info.paragraph} techno={info.tecnho}/>
            );
        })
       }
       </div>
    );
}