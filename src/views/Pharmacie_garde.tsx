import FlatList from "flatlist-react"
import categorie from "../classes/categorie";
import '../styles/Categorie.css'
import CardProduct from "../components/CardProduct";

function Pharmacie_garde(){
    const categories= [
        {id: 1, label: "Soin anti age, anti ride"},
        {id: 2, label: "cheveux"},
        {id: 3, label: "Douche"},
        {id: 4, label: "Soin de visage"},
        {id: 5, label: "Soin de corps"},
        {id: 6, label: "Soin nettoyant visage"},
        {id: 7, label: "Complément beauté"},
        {id: 8, label: "Anti imperfections"},
        {id: 9, label: "Produits hygiène intime"},
        {id: 10, label: "parfum"},
        {id: 11, label: "Bain"},
        {id: 12, label: "Produits maquillage"},
        {id: 13, label: "Déodorant"},
        {id: 14, label: "Soins des pieds"},
        {id: 15, label: "Soin des lèvres"},
        {id: 16, label: "Savon"},
        {id: 17, label: "Démaquillants"},
        {id: 19, label: "Soin des ongles"},
        {id: 20, label: "Soin homme"},
        {id: 21, label: "Epilation"},
        {id: 22, label: "Masques visage"},
    ]

    const renderItem = (item: categorie, idx:any) => (
        <div key={idx} className="element">
            <a href="">{item.label}</a>
        </div>
      );

    return(
        <div>
        <h4>Pharmacie de garde</h4>
        {/* <div className='categorie_container'>
            <FlatList
                list={categories}
                renderItem={renderItem}
                renderWhenEmpty={() => <div>No categories found</div>}
            />
        </div> 
        <CardProduct/>  */}
        </div>  
    )
}

export default Pharmacie_garde