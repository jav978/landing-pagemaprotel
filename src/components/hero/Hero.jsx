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
                        <h1 className="text-3xl lg:text-[60px] lg:leading-none lg:text-start font-bakbak text-center  font-bakbak-one mt-8 lg:mt-0  text-slate-800 dark:text-white">
                            Brindamos Inteligencia tecnológica para su negocio
                        </h1>
                        <p className="mx-auto mt-8 text-lg font-normal lg:mb-8 lg:mr-10 lg:text-left sm:text-center lg:text-2xl font-montserrat dark:text-white text-slate-600">
                            Lo acompañamos en su proceso de Transformación
                            Digital, pues nuestra pasión es hacer que la
                            tecnología sea el mejor aliado para su negocio.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <Button
                                gradientDuoTone="purpleToBlue"
                                size="lg"
                                href="https://api.whatsapp.com/send?phone=584122038886&text=Bienvenidos a Maprotel,%20me%20gustaría%20saber%20más%20sobre%20tu%20producto"
                                className="mt-8"
                                
                            >
                                <FaWhatsapp className="mr-2 h-5 w-5" />
                                Contactenos
                            </Button>
                          
                      

                        </div>
                    </div>
                    <img
                        src={ImageHero}
                        className="border-2 border-indigo-500/100  rounded-md  mt-8 lg:mt-0 block h-full  lg:block  mx-auto object-cover object-right"
                        alt="Agent image"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
