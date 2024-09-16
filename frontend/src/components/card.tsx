
interface CardProps {
    title: string;
}

export const Cards: React.FC<CardProps> = (props) => {
    return (
        <div className="w-3/4 h-96 flex flex-col bg-neutral-900 m-10 rounded-lg">
            <div className="mt-2 flex justify-center text-amber-400 text-2xl">
                <div className="text-white text-2xl">Read</div>
                <div>{props.title}</div>
                
            </div>




            <div className="flex flex-row  h-max">
                <figure className="ml-5 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="/images/argentina.png" alt="image description"/>
                    </a>
                    <figcaption className="absolute px-4 text-2xl text-amber-300 bottom-6">
                        <p>Argentine Glory</p>
                    </figcaption>
                </figure>
                <div>content</div>
            </div>
        </div> 
    )
};