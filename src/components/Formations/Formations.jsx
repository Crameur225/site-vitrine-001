import { Formation } from "./Formation";
import s from './style.module.css'
export function Formations() {
  return(
   <div className="container py-28">
     <div>
        <h2 className="text-center text-4xl font-medium text-blue-950">Look The Beautiful Formations 🥰</h2>
     </div>
     <div className={`flex justify-between flex-wrap m-auto content-between pt-20 items-center ${s.container}`}>
        <Formation />
     </div>
   </div>
  );
}