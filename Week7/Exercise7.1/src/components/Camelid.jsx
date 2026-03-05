function Camelid({name, trivia, img}) {
    
    return(
        <div>
            <h2>{name}</h2>
            <img src={img} />
            <p>{trivia}</p>
        </div>
    );
}
export default Camelid;