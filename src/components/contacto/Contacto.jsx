import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "flowbite-react";


const Contacto = () => {
    return (
        <>
            <section
                className="flex  max-w-screen-xl dark:text-white  text-slate-800"
                id="contactos " 
            >
                <div className="flex flex-wrap justify-center gap-5 px-4 lg:flex-col lg:items-center flex-col lg:px-0">
                    <h1 className="mb-6 text-3xl text-center lg:text-5xl  text-slate-800 dark:text-white  font-bakbak-one">
                        Contactanos
                    </h1>

                    <p className="px-4 text-center lg:text-2xl font-montserrat  text-slate-700 dark:text-white">
                        ¿Tienes alguna pregunta o deseas más información? ¡No
                        dudes en contactarnos!.
                    </p>

                    <p className="px-4 mb-8 text-center lg:text-2xl font-montserrat  text-slate-700 dark:text-white">
                        Envíanos un mensaje a través de{" "}
                        <span className="font-bold">WhatsApp</span> y te
                        atenderemos con gusto
                    </p>
                    <Button
                                size="lg"
                                href="https://api.whatsapp.com/send?phone=584122038886&text=Bienvenidos a Maprotel,%20me%20gustaría%20saber%20más%20sobre%20tu%20producto"
                                className="flex items-center justify-center text-base font-bold text-center text-white capitalize mx-auto mb-8"
                                gradientDuoTone="purpleToBlue"
                            >
                                <FaWhatsapp className="mr-2 h-5 w-5" />
                                Contactenos
                            </Button>                    
                </div>
            </section>
        </>
    );
};

export default Contacto;
