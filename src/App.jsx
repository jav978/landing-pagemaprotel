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
                    className="scroll-smooth grid  overflow-hidden bg-bkg text-content dark:bg-content isolate  place-items-center lg:px-0 px-6 bg-gradient-to-r from-slate-50 dark:from-slate-600 dark:via-slate-700 via-slate-100 dark:to-slate-900 to-slate-300"
                    id="main"
                    >
                    <div className="relative grid min-h-screen gap-10 place-items-center place-content-center  max-w-7xl md:px-4">
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
