import { Formation } from "./Formation";
import s from './style.module.css'
export function Formations() {
  return(
   <div className="container py-36  mx-auto">
    <div className="w-[100%]">
     <div>
        <h2 className="text-center text-4xl font-medium text-blue-950">Look The Beautiful Formations 🥰</h2>
     </div>
     <div className={`flex justify-between pt-20 items-center overflow-x-clip ${s.flexons} `}>
        <Formation />
     </div>
   </div>
   </div>
  );
}