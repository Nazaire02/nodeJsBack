import FlatList from "flatlist-react"
import categorie from "../classes/categorie";
import '../styles/Categorie.css'
import CardProduct from "../components/CardProduct";

function Medicament_traitement(){
    const categories= [
        {id: 1, label: "Dermatologie"},
        {id: 2, label: "Digestion"},
        {id: 3, label: "Douleurs-fièvre"},
        {id: 4, label: "Rhume-Gorge-Toux"},
        {id: 5, label: "Homéopathie traitement"},
        {id: 6, label: "Circulation sanguine"},
        {id: 7, label: "Complément beauté"},
        {id: 8, label: "Sevrage tabac"},
        {id: 9, label: "Vitamines-minéraux"},
        {id: 10, label: "Détente-sommeil"},
        {id: 11, label: "Féminité"},
        {id: 12, label: "Soins bucco-dentaires"},
        {id: 13, label: "Oligothérapie"},
        {id: 14, label: "Antiparasitaire"},
        {id: 15, label: "Ophtalmologie"},
        {id: 16, label: "Troubles urinaires"},
    ]

    const renderItem = (item: categorie, idx:any) => (
        <div key={idx} className="element">
            <a href="">{item.label}</a>
        </div>
      );

    return(
        <div>
        <h4>Médicaments et traitements</h4>
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

export default Medicament_traitement