import { cardData } from '../../data/card-data';

const cardInfo = cardData;


const CardAbout = () => {
    return (
        <>
            <section
                className="text-slate-800 dark:text-white"
                id="profolio"
            >
                <h1 className="mt-8  lg:mt-0 text-3xl text-center lg:text-5xl text-slate-800 dark:text-white font-bakbak-one">
                    Portafolio de Productos y Servicios
                </h1>

                <div className="grid grid-cols-1 gap-10  sm:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-16">
                    {cardInfo.map((card) => (
                        <div className="overflow-hidden shadow-lg rounded-xl dark:shadow-lg h-65" key={card.id}>
                            <div className="mx-auto text-centerddark:bg-slate-400">
                                <img
                                    className="h-[100%]  w-[100%]"
                                    src={card.img.src}
                                    alt={card.img.alt}
                                />
                            </div>
                            <div className="p-4 bg-sky-500 h-[100%] dark:bg-slate-700 ">
                                <h3 className="mb-4 text-2xl text-center text-white font-bakbak-one">
                                    {card.title}
                                </h3>
                                <p className="px-2 font-normal text-center text-white dark:text-white font-montserrat">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CardAbout;
