import { useState } from "react";
import productImage from "../assets/mixa.png"
import "../styles/CardProduct.css"
function CardProduct() {
    const [isClick, setIsClick] = useState(false);

    return (
        <div className="cardProduct" onClick={() => { setIsClick(!isClick); console.log(isClick) }}>
            {!isClick ? (
                <div>
                    <div className="containerImgProduct">
                        <img src={productImage} alt="" className="imgProduct" />
                    </div>
                    <div>
                        <p className="titleProduct">Mixa</p>
                        <p className="indicationProduct">Pommade de bébé</p>
                        <p className="commentProduct">Hydrate et adoucie la peau</p>
                        <div className="containerCapacity"><p>70 ml</p></div>
                    </div>
                    <div className="priceContainer">
                        <p className="prix">2000 FCFA</p>
                    </div>
                </div>) : (<div className="ContainerVersoCard">
                    <p>Pharmacie</p>
                    <p>Christ Stella</p>
                    <p>Attécoubé</p>
                    <p className="voirPlusButton">Voir +</p>
                </div>)
            }
        </div>
    )
}

export default CardProduct;