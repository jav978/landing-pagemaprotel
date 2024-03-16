interface CardImage {
    src: string;
    alt: string;
}

const Card: React.FC<{
    title: string;
    img: CardImage;
    description: string;
    cta: string;
}> = ({ title, img, description, cta }) => {
    return (
        <article className="grid gap-2 p-6 border-2 rounded-md card border-accent-1">
            <h2 className="text-3xl font-bold">{title}</h2>
            <img
                src={img.src}
                alt={img.alt}
                className="rounded-sm aspect-video"
            />
            <p>{description}</p>
            <a
                href="#"
                className="grid px-4 py-2 transition-opacity rounded-sm bg-content text-bkg place-items-center max-w-fit hover:opacity-90"
            >
                {cta}
            </a>
        </article>
    );
};

export default Card;
