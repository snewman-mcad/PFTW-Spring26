function Skein({skeins}) {
    
    return(
        <div>
            {skeins.map((yarn) => {
                return (
                    <div className="grid" key={yarn.name}>
                        <img src={yarn.image} />
                        <div>
                            <h2>{yarn.name}</h2>
                            <p>{yarn.weight}</p>
                            <p>{yarn.yardage + " yards per skein"}</p>
                            <p>{yarn.fiber}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
export default Skein;