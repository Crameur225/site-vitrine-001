import { useState } from "react"

export function Footer(){
  const date = new Date();
  const dateYear = date.getFullYear();
    
    return(
        <div className="h-40 w-[100%] border-none bg-slate-950 text-center">
         <p className="text-white pt-20 text-xl">Copyright &copy; {dateYear} Gael Agbe Developpeur FRONTEND</p>
        </div>
    )
}