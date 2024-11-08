import { Banner } from "./components/Banner/Banner";
import { Carrousels } from "./components/Carrousel/Carrousels";
import { Formations } from "./components/Formations/Formations";
import { NavBar } from "./components/NavBar/NavBar";
import { Products } from "./components/Products/Products";
import './App.css'
import { Accordeon } from "./components/Accordeons/Accordeon";
import { Footer } from "./components/footer/Footer";
export function App() {
 
  return (
    <>
      <div>
        <NavBar />
        <Banner />
        <Formations />
        <Products />
        <Carrousels/>
        <Accordeon/>
        <Footer/>
      </div>
    </>
  )
}


