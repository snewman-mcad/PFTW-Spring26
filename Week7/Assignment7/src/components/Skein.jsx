import "./Skein.css";

function Skein({name, image, alt, weight, yardage, fiber, odd}) {
    return(  
        <div className={odd && "odd"}>
            <div className={"grid"} key={name}>
                <img src={image} alt={alt} />
                <div className={odd && "odd-inner"}>
                    <h2>{name}</h2>
                    <p>{"Yarn weight: " + weight}</p>
                    <p>{yardage + " yards per skein"}</p>
                    <p>{"Fiber content: " + fiber}</p>
                </div>
            </div>
        </div>
    );
}
export default Skein;