
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
            <div className="flex flex-row">
                <div></div>
                <img></img>
            </div>
            <div>
                content
            </div>
        </div> 
    )
};