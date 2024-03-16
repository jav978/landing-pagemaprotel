import ImageAbout from "./../../assets/image-agent/agente2.jpg";
const About = () => {
    return (
        <>
            <section
                className="px-4 dark:text-white"
                id="about"
            >
                 <h1 className="text-3xl text-center text-black font-bakbak-one lg:text-5xl dark:text-white">
						Nosotros
                        </h1>
                <div className="grid max-w-screen-xl grid-cols-1 gap-10 py-8 mx-auto lg:py-8 lg:grid-cols-2">
                    <div>
                        <img
                            src={ImageAbout}
                            className="rounded-2xl h-[100%] w-[100%] ml-auto  lg:block"
                            alt="Agent image"
                        />
                    </div>

                    <div className="flex flex-col items-center w-full lg:items-start">
                        <h1 className="text-2xl text-center text-black font-bakbak-one lg:text-3xl dark:text-white lg:text-right">
						¿Quienes Somos?
                        </h1>
                        <p className="px-2 mt-4 mb-4 text-lg font-normal text-justify text-black lg:text-justify lg:text-2xl sm:px-16 lg:px-2 dark:text-white font-montserrat lg:mt-8">
                            <span className="font-bold dark:text-white">
                                {" "}
                                Maprotel
                            </span>{" "}
                            es una empresa de Servicios Profesionales,
                            Consultoría en IT (Informática y Telecomunicaciones)
                            con mas de 15 años de experiencia en el mercado.
                        </p>
                        <p className="px-2 mt-4 text-lg font-normal text-justify text-black lg:text-justify dark:text-white lg:text-2xl sm:px-16 lg:px-2 font-montserrat lg:mt-8">
                            Orientada a servicios y aplicaciones de innovación
                            enfocados a mejorar su Atención Cliente e impulsar
                            sus ventas.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
