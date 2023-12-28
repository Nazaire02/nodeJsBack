import productImage from "../assets/mixa.png"
import "../styles/CardProduct.css"
function CardProduct(){
    return(
        <div className="cardProduct">
            <div className="containerImgProduct">
                <img src={productImage} alt="" className="imgProduct"/>
            </div>
            <div>
                <p className="titleProduct">Mixa</p>
                <p className="indicationProduct">Pommade de bébé</p>
                <p className="commentProduct">Hydrate et adoucie la peau</p>
                <p>70 ml</p>
            </div>
            <div>
                <p>2000 FCFA</p>
            </div>
        </div>
    )
}

export default CardProduct;