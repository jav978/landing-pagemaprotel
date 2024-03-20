import LogoSarem from "./../../assets/image-client/logo-saren.png";
import LogoEclipse from "./../../assets/image-client/Elipse-Logo-Web-Azul.png";
import LogoLicoresMundiales from "./../../assets/image-client/logo-2lm.png";
import LogoSeniat from "./../../assets/image-client/logo-seniat.svg";
import LogoCentroMedico from "./../../assets/image-client/logo-centro-medico-docente-la-trinidad.svg";
import LogoNet1 from "./../../assets/image-client/net-1.png";

const Client = () => {
    return (
        <>
            <article
                className="flex flex-wrap justify-center w-full text-slate-700 dark:text-white"
                id="cliente"
            >
                <div className="flex flex-wrap justify-center gap-5 lg:flex-col w-full">
                    <h1 className="text-3xl text-center lg:text-5xl font-bakbak-one mt-8 text-slate-800 dark:text-white">
                        Principales Clientes
                    </h1>

                    <p className="mt-8  text-center lg:text-2xl font-montserrat  text-slate-700 dark:text-white lg:mt-8">
                        En <span className="font-bold text-slate-700 dark:text-white"> Maprotel</span> servimos
                        a una amplia gama de clientes, desde startups hasta
                        grandes empresas.
                    </p>
                </div>

                <div className="flex flex-col flex-wrap items-center justify-between w-full  gap-20 mt-8 mb-8 lg:flex-row gap-y-15 md:gap-20 text-slate-700 dark:text-white">
                    <img
                        className="w-[50px] grayscale dark:grayscale-0"
                        src={LogoSarem}
                        alt="Logo Saren"
                    />

                    <img
                        className="w-[200px] lg:w-[150px] grayscale dark:grayscale-0"
                        src={LogoEclipse}
                        alt="Logo Eclipse"
                    />

                    <img
                        className="w-[200px] lg:w-[150px] grayscale dark:grayscale-0"
                        src={LogoSeniat}
                        alt="Logo Seniat"
                    />
                    <img
                        className="w-[200px] lg:w-[160px] grayscale dark:grayscale-0"
                        src={LogoLicoresMundiales}
                        alt="Logo licores mundiales"
                    />
                    <img
                        className="w-[200px] lg:w-[150px] grayscale dark:grayscale-0"
                        src={LogoCentroMedico}
                        alt="Logo Centro medico"
                    />
                    <img
                        className="w-[200px] lg:w-[120px] grayscale dark:grayscale-0"
                        src={LogoNet1}
                        alt="Logo net 1"
                    />
                </div>
            </article>
        </>
    );
};

export default Client;
