import { PRODUITS } from "./InforProduits";

export function Product(){
    return(
        <>
         {
            PRODUITS.map((produit) =>{
              return(
                <div key={produit.id} className=" w-[15em]">
                <img  src={produit.img} style={{width:"5em", margin:"auto", paddingTop:"2em", paddingBottom:"2em"}}  alt={produit.title} />
                <h2 className="text-gray-600 classe-texte-one text-center py-2 text-xl"> {produit.title}</h2>
                <p className="py-2 classe-texte-one">{produit.paragraph}</p>
              </div>
              );
            })
         }
        </>
    );
}