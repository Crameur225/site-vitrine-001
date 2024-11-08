import { useEffect, useMemo, useState } from "react";
import "./style.css";
import image from "../../../public/image/personnes.jpg";
import image1 from "../../assets/virtuel.jpg"

export function Banner() {
  const [selectOption, setSelectOption] = useState("Category");
  const [isVisible, setIsVisible] = useState(window.innerWidth > 800)
  const [isForm, setIsForm] = useState(window.innerWidth > 700)

  function handleVisible(){
    if(innerWidth <= 800 && isVisible){
        setIsVisible(false)
    }else if(window.innerWidth > 800 && !isVisible) {
        setIsVisible(true)
    }
   }

  useEffect(() =>{ 
   window.addEventListener('resize', handleVisible);
   return() => {
    window.removeEventListener('resize', handleVisible)
} 
  }, [isVisible])
  
  // Form
  function handleForm(){
    if(innerWidth <= 700 && isForm){
        setIsForm(false)
    }else if(window.innerWidth > 700 && !isForm){
        setIsForm(true)
    }
 }
  useEffect(() =>{
     
     window.addEventListener('resize', handleForm)

     return() => {
        window.removeEventListener('resize', handleForm)
    } 
  }, [isForm])

  const handleChange = (e) => {
    setSelectOption(e.target.value);
  };

  return (
    <div className="bg-cyan-600 pt-20 bg-opacity-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pt-16 pb-10">
            <h2 className="text-start text-xl font-bold">Courses</h2>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <p className="w-[100%] text-5xl font-medium leading-20 tracking-wide">
                <span className="text-red-900">Online Courses</span> <br />{" "}
                <span>
                  For Every <br /> student
                </span>
              </p>
              <p className="w-[99%] py-4">
                Over 200 courses to make you an expert in technology. <br />{" "}
                Start now learning using our courses !
              </p>
              {isForm && <>
                  <div className="pb-4 input">
                <input
                  className="p-3  rounded-l-[0.5em] border-r-2"
                  type="search"
                  placeholder="search..."
                />
                <select
                  className="p-3 mx-0 my- rounded-r-[0.5em]"
                  value={selectOption}
                  onChange={handleChange}
                >
                  <option value="category">Category</option>
                  <option value="HTML/CSS">HTML/CSS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="reactjs">ReactJS</option>
                  <option value="node">NodeJS</option>
                </select>
                <button type="search" className="rounded  ml-2 border border-white p-3  text-white bg-red-500">
                  SEARCH
                </button>
              </div>
              </> }
              <div className="flex items-center pb-10 content-center">
                <img
                  className="w-[50px] h-[50px] border-2 mr-[-2%] border-white border-opacity-80 rounded-[200px]"
                  src={image}
                  alt=""
                />
                <img
                  className="w-[50px] h-[50px] mr-[-1%] border-2 border-white border-opacity-80 rounded-[200px]"
                  src={image}
                  alt=""
                />
                <img
                  className="w-[50px] h-[50px] border-2 border-white border-opacity-80 rounded-[200px]"
                  src={image}
                  alt=""
                />
                <p className="px-3">
                  Je suis un Débutant. Cool !
                  <span className="text-pink-600 font-bold">100k</span>
                </p>
              </div>
            </div>
            {
                isVisible && <>
                <div className="col-lg-7 col-sm-12">
            
                <div className="w-[100%] h-[100vh] relative">
                    <img className=" rounded-xl border-4 border-white" src={image1} alt="image baby extrait de pixabay" />
                </div>
                </div>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
