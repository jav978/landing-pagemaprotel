import whatsappIcon from './../../assets/icons/icons8-whatsapp.svg';
const Contacto = () => {
    return (
        <>
            <section
                className="flex flex-wrap items-center justify-center w-full dark:text-white Justify-center"
                id="contactos" 
            >
                <div className="flex flex-wrap justify-center w-full gap-5 px-4 lg:flex-col lg:items-center">
                    <h1 className="mb-6 text-3xl text-center lg:text-5xl dark:text-white font-bakbak-one">
                        Contactanos
                    </h1>

                    <p className="px-4 text-center lg:text-2xl font-montserrat dark:text-white">
                        ¿Tienes alguna pregunta o deseas más información? ¡No
                        dudes en contactarnos!.
                    </p>

                    <p className="px-4 mb-8 text-center lg:text-2xl font-montserrat dark:text-white">
                        Envíanos un mensaje a través de{" "}
                        <span className="font-bold">WhatsApp</span> y te
                        atenderemos con gusto
                    </p>

                    <a
                        href="https://api.whatsapp.com/send?phone=584123456789&text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tu%20producto"
                        className="inline-flex items-center justify-center px-5 py-3 mb-6 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        
                        Contactenos

						<img className="w-6 h-6 ml-2" src={whatsappIcon} alt="Logoo de Whatsapp" /> 
                    </a>
                </div>
            </section>
        </>
    );
};

export default Contacto;
