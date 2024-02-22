import FlatList from "flatlist-react"
import categorie from "../classes/categorie";
import '../styles/Categorie.css'
import CardProduct from "../components/CardProduct";
import { useState } from "react";
import SortBar from "../components/SortBar";

function Beaute_Cosmetique() {
    const categories = [
        { id: 1, label: "Soin anti age, anti ride" },
        { id: 2, label: "cheveux" },
        { id: 3, label: "Douche" },
        { id: 4, label: "Soin de visage" },
        { id: 5, label: "Soin de corps" },
        { id: 6, label: "Soin nettoyant visage" },
        { id: 7, label: "Complément beauté" },
        { id: 8, label: "Anti imperfections" },
        { id: 9, label: "Produits hygiène intime" },
        { id: 10, label: "parfum" },
        { id: 11, label: "Bain" },
        { id: 12, label: "Produits maquillage" },
        { id: 13, label: "Déodorant" },
        { id: 14, label: "Soins des pieds" },
        { id: 15, label: "Soin des lèvres" },
        { id: 16, label: "Savon" },
        { id: 17, label: "Démaquillants" },
        { id: 19, label: "Soin des ongles" },
        { id: 20, label: "Soin homme" },
        { id: 21, label: "Epilation" },
        { id: 22, label: "Masques visage" },
    ]

    //Pour ce tabkeau faire clé valeur pour faciliter
    const [searchItem, setSearchItem] = useState(["beaute_cosmetique"])

    //Ce state va servir à contenir l'item selectionné
    const [itemChoose, setItemChoose] = useState<categorie | null>(null);

    function addSearchItem(item: string) {
        if (searchItem.length > 1) {
            const newSearchitem = [searchItem[0], item]
            setSearchItem(newSearchitem)
        } else {
            setSearchItem(searchItem => [...searchItem, item]);
        }
    }

    console.log(searchItem === null)

    const renderItem = (item: categorie, idx: any) => (
        <div key={idx} className="element" onClick={() => setItemChoose(item)}>
            <a>{item.label}</a>
        </div>
    );

    return (
        <div>
            {!itemChoose && <h4>Beauté et cosmétique</h4>}
            {itemChoose &&
                <div className="containerLabelItemChoose">
                    <p onClick={() => setItemChoose(null)}>Go back</p>
                    <h4>{itemChoose?.label}</h4>
                </div>
            }
            {!itemChoose &&
                <div className='categorie_container'>
                    <FlatList
                        list={categories}
                        renderItem={renderItem}
                        renderWhenEmpty={() => <div>No categories found</div>}
                    />
                </div>
            }
            {itemChoose && <SortBar />}
            <div className="searchBarConaitner"></div>
            <div className="containerCard">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    )
}

export default Beaute_Cosmetique