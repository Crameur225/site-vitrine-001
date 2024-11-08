import InfoFormations from './InfoFormations'
import s from './style.module.css'
export function Formation(){
    return(
     <>
     
        {
            InfoFormations.map((information) =>{
            return(
            <div key={information.id}>
            <div className={`w-[25em] py-4 rounded m-auto shadow ${s.box}`}>
            <img style={{borderRadius: "25px", width:"20em", margin: "10px auto"}}   src={information.img} alt={information.title} />
            <h2 className='font-medium text-2xl text-center'>{information.title}</h2>
            <p className={`pt-4 w-auto  px-3  tracking-widest ${s.cont}`}>{information.content}</p>
            <p className='px-3 pb-4'>By {information.autheur}</p>
            <p className='px-3 font-bold'><span className='text-red-600'>{information.priceNow} USD</span> <span className='line-through'>{information.priceAfter} USD</span> </p>
            <span className='px-3'><span className='border-r-2 mr-2 pr-2 border-opacity-10 border-gray-800'>{information.hours} hours</span> {information.lessons} lessons</span>
            </div>
            </div>
            );
        })
        }
     
     </>
    );
}