import FlatList from "flatlist-react"
import categorie from "../classes/categorie";
import '../styles/Categorie.css'
import CardProduct from "../components/CardProduct";

function Animaux_vegetaux(){
    const categories= [
        {id: 1, label: "Anti puce et tique chat et chien"},
        {id: 2, label: "Vermifuge chat et chien"},
        {id: 3, label: "Système digestif"},
        {id: 4, label: "Yeux-Oreilles-Bouche"},
        {id: 5, label: "Articulations"},
        {id: 6, label: "Soin du pelage"},
        {id: 7, label: "Anti-stress chien et chat"},
        {id: 8, label: "Shampoing pour animaux"},
        {id: 9, label: "Vitamine chat et chien"},
        {id: 10, label: "Aliments"},
        {id: 11, label: "Soin des coussinets"},
    ]

    const renderItem = (item: categorie, idx:any) => (
        <div key={idx} className="element">
            <a href="">{item.label}</a>
        </div>
      );

    return(
        <div>
        <h4>Animaux et végétaux</h4>
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

export default Animaux_vegetaux