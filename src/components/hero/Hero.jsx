import { Button } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa6";
import ImageHero from "./../../assets/image-agent/agente1.png";


import "@fontsource/bakbak-one";
const Hero = () => {
    return (
        <>
            <section className="" id="home">
                <div className="grid max-w-screen-xl grid-cols-1   mx-auto text-center md:grid-cols-1 lg:py-10 lg:grid-cols-2  gap-x-2">
                    <div className="flex flex-col items-center w-full gap-2 lg:items-start">
                        <h1 className="text-3xl lg:text-[60px] lg:leading-none lg:text-start font-bakbak text-center  font-bakbak-one mt-8 lg:mt-0  text-slate-700 dark:text-white">
                            Brindamos Inteligencia tecnológica para su negocio
                        </h1>
                        <p className="mx-auto mt-8 text-lg font-normal lg:mb-8 lg:mr-10 lg:text-left sm:text-center lg:text-2xl font-montserrat dark:text-white text-slate-700">
                            Lo acompañamos en su proceso de Transformación
                            Digital, pues nuestra pasión es hacer que la
                            tecnología sea el mejor aliado para su negocio.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <Button
                                size="lg"
                                href="https://api.whatsapp.com/send?phone=584123456789&text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tu%20producto"
                                className="inline-flex items-center justify-center text-base font-bold text-center text-white capitalize h-[48px] mt-8 hover:bg-blue-200"
                                gradientDuoTone="purpleToBlue"
                            >
                                <FaWhatsapp className="mr-2 h-5 w-5" />
                                Contactenos
                            </Button>
                        </div>
                    </div>
                    <img
                        src={ImageHero}
                        className="border-2 border-gradientDuoTone rounded-md  mt-8 lg:mt-0 h-[100%] w-[100%]   lg:block  mx-auto"
                        alt="Agent image"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
