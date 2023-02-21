const Produktkarte = (props) => {
    return ( 
        <div className="w-40 text-center">
            <img className="w-40" src={props.img} alt="" />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button className="rounded-lg p-1 bg-red-400 text-white">Buy Now</button>
        </div>
     );
}
 
export default Produktkarte;