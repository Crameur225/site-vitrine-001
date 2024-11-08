import { Product } from "./Product";
import './stylees.css'
export function Products(){
    return(
     <div className="container py-10 sm:container ">
        <h2 className="font-bold text-center text-3xl text-gray-600">Ce Qu'il faut faire 🧏</h2>
        <div className="flex classe-first-one py-8 flex-wrap justify-between items-center">
            <Product />
        </div>
     </div>
    );
}