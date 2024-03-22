import CardAbout from "./components/card/CardAbout";
import Client from "./components/client/Client";
import './App.css'
import Footer from "./components/common/footer/Footer";
// import Navbar from "./components/common/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Contacto from "./components/contacto/Contacto";
import { BrowserRouter } from "react-router-dom";
import { Menu } from './components/common/navbar/Menu';
import ScrollButton from "./components/ScrollButton/ScrollButton";

export default function App() {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Menu />
                <main
                    className="scroll-smooth grid  overflow-hidden bg-bkg text-content dark:bg-content isolate  place-items-center lg:px-0  bg-gradient-to-r from-slate-50 dark:from-neutral-900 dark:via-slate-700 via-slate-100 dark:to-[#180c3d]  to-slate-300 dark:bg-blend-darken"
                    id="main"
                    >
                    <div className="relative grid min-h-screen gap-10 place-items-center place-content-center  max-w-7xl sm:px-6 md:px-6 px-6 lg:px-6">
                        <Hero />
                        <Client />
                        <About />
                        <CardAbout />
                        <Contacto />
                        <ScrollButton /> 
                    </div>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}
