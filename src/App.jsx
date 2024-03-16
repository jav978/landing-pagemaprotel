import CardAbout from "./components/card/CardAbout";
import Client from "./components/client/Client";
import Footer from "./components/common/footer/Footer";
import Navbar from "./components/common/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Contacto from "./components/contacto/Contacto";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="grid p-4 overflow-hidden bg-bkg text-content dark:bg-content isolate sm:p-8 place-items-center">
              <div className="relative grid min-h-screen gap-16 place-items-center place-content-center before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10">
              <Hero />
                <Client />
                <About />
                <CardAbout />
                <Contacto />
              </div>
                
            </main>
            <Footer />
        </>
    );
}
