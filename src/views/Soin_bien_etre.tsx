import FlatList from "flatlist-react"
import categorie from "../classes/categorie";
import '../styles/Categorie.css'
import CardProduct from "../components/CardProduct";

function Soin_bien_etre(){
    const categories= [
        {id: 1, label: "Pansements"},
        {id: 2, label: "Chirurgie esthétique"},
        {id: 3, label: "Soin des plaies"},
        {id: 4, label: "Rééducation et thérapie"},
        {id: 5, label: "Equipement de protection médicale"},
        {id: 6, label: "Injection et perfusion"},
        {id: 7, label: "Hygiène des mains"},
        {id: 8, label: "Compresses et coton"},
        {id: 9, label: "Bande et sparadrap"},
        {id: 10, label: "Alcool médical"},
        {id: 11, label: "Aérol Nébuliseur"},
        {id: 12, label: "Oxygénothérapie"},
        {id: 13, label: "Déodorant"},
        {id: 14, label: "Nutrition entérale"},
        {id: 15, label: "Ablation du sein"},
        {id: 16, label: "Protection incontinence"},
    ]

    const renderItem = (item: categorie, idx:any) => (
        <div key={idx} className="element">
            <a href="">{item.label}</a>
        </div>
      );

    return(
        <div>
        <h4>Soins et bien etre</h4>
        <div className='categorie_container'>
            <FlatList
                list={categories}
                renderItem={renderItem}
                renderWhenEmpty={() => <div>No categories found</div>}
            />
        </div> 
        <CardProduct/> 
        </div>  
    )
}

export default Soin_bien_etre