import ImageAbout from "./../../assets/image-agent/agente2.jpg";
const About = () => {
    return (
        <>
            <section className="text-slate-800 dark:text-white"
                
                id="about"
            >
                 <h1 className="text-3xl text-center  font-bakbak-one lg:text-5xl  text-slate-800 dark:text-white">
						Nosotros
                        </h1>
                <div className="grid max-w-screen-xl grid-cols-1 gap-10 mt-8 mx-auto lg:py-8 lg:grid-cols-2">
                    <div>
                        <img
                            src={ImageAbout}
                            className="rounded-md h-full w-full ml-auto  lg:block border-2 border-indigo-500 object-cover"
                            alt="Agent image"
                        />
                    </div>

                    <div className="flex flex-col items-center w-full lg:items-start justify-between gap-">
                        <h1 className="text-slate-800 dark:text-white text-2xl text-center font-bakbak-one lg:text-3xl  lg:text-right mt-4 lg:mt-0">
						¿Quienes Somos?
                        </h1>
                        <p className="lg:leading-loose mt-8 text-lg font-normal text-justify lg:text-justify lg:text-2xl sm:px-16 lg:px-0  font-montserrat lg:mt-0  text-slate-700 dark:text-white">
                            <span className="font-bold text-slate-700 dark:text-white">
                                
                                Maprotel
                            </span>{" "}
                            es una empresa de Servicios Profesionales,
                            Consultoría en IT (Informática y Telecomunicaciones)
                            con mas de 15 años de experiencia en el mercado.
                        </p>
                        <p className="mt-8 text-lg font-normal text-justify lg:text-justify  text-slate-700 dark:text-white lg:text-2xl sm:px-16 lg:px-0 font-montserrat lg:mt-0 lg:leading-loose">
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
