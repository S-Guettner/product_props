import Produktkarte from "../produktkarte/Produktkarte";

const ProduktkarteData = () => {
    return ( 
        <div className="grid sm:grid-cols-1  md:grid-cols-3 p-4">
        <Produktkarte 
        img = {"https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"}
        name = {"cocooil"}
        price = {"30$"}
        />
        <Produktkarte 
        img = {"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 "}
        name = {"Polaroid"}
        price = {"60$"}
        />
        <Produktkarte 
        img = {"https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
        name = {"Maui Moisture"}
        price = {"20$"}
        />
        </div>
     );
}
 
export default ProduktkarteData;