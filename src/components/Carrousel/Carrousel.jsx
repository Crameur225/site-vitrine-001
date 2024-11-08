
export function Carrousel({img, profils, title, content, author, level}){
    return(
     <div className='w-ful'>
         <div className="flex w-[100%] px-2 justify-between items-center ">
        <div className='w-[60%]'>
            <img  style={{width: "30em", height: "30em", borderRadius: "0.5em"} } src={img} alt="" />
        </div>
        <div className='w-[40%]'>
        <span >-{profils}</span>
          <h2 className=' py-6 text-2xl font-bold'>{title}</h2>
          <p className='py-6'>{content}</p>
           <p className='text-gray-600'><span className='font-bold text-xl'>Author:</span> {author}</p>
           <p className='text-gray-600'><span className='font-bold text-xl'>Levels :</span> {level}</p>
        </div>
      </div>
     </div>
    );
}
