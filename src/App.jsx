import CardAbout from "./components/card/CardAbout";
import Client from "./components/client/Client";
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
                    className="scroll-smooth grid  overflow-hidden bg-bkg text-content dark:bg-content isolate  place-items-center lg:px-0 px-6"
                    id="main"
                >
                    <div className="relative grid min-h-screen gap-10 place-items-center place-content-center before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-1/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10 max-w-7xl md:px-4">
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
