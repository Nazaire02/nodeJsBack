import FlatList from "flatlist-react"
import categorie from "../classes/categorie";
import '../styles/Categorie.css'
import CardProduct from "../components/CardProduct";

function Vitamine_supplement(){
    const categories= [
        {id: 1, label: "Anti-vieillissant"},
        {id: 2, label: "Articulations et muscles"},
        {id: 3, label: "Cheveux-peau-ongles"},
        {id: 4, label: "Cholestérol-diabète"},
        {id: 5, label: "Circulation veineuse"},
        {id: 6, label: "Concentration-mémoire"},
        {id: 7, label: "Digestion-transit"},
        {id: 8, label: "Fertilité-grossesse"},
        {id: 9, label: "Impuissance"},
        {id: 10, label: "Ménopause"},
        {id: 11, label: "Minceur"},
        {id: 12, label: "ORL"},
        {id: 13, label: "Sommeil-stress"},
        {id: 14, label: "Sport"},
        {id: 15, label: "Système urinaire"},
        {id: 16, label: "Transpiration"},
        {id: 17, label: "Vision"},
        {id: 19, label: "Vitalité-défense immuniataire"},
    ]

    const renderItem = (item: categorie, idx:any) => (
        <div key={idx} className="element">
            <a href="">{item.label}</a>
        </div>
      );

    return(
        <div>
        <h4>Vitamines et suppléments</h4>
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

export default Vitamine_supplement