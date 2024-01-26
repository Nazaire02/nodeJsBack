import { useState } from "react";
import "../styles/SortBar.css";
import Toggle from "./Toggle";



function SortBar() {
    const [sortToggle, setSortToggle] = useState(false)
    const [isToggle, setIsToggle] = useState(false)

    const itemsTrier = ["Prix croissant","Prix décroissant","Alphabétique croissant","Alphabétique décroissant"]
    const itemsPourQui =["Adolescent","Adulte","Bébé", "Enfant"] 
    const itemsVilles = [
        "Abidjan", "Yamoussoukro", "Bouaké", "Daloa", "San-Pédro", "Divo", "Korhogo", "Anyama", "Man", "Gagnoa", 
        "Abengourou", "Séguéla", "Odienné", "Toumodi", "Dimbokro", "Ferkessédougou", "Bondoukou", "Agboville", 
        "Grand-Bassam", "Bouaflé", "Sassandra", "Sinfra", "Dabou", "Bonoua", "Bangolo", "Tiassalé", "Bingerville", 
        "Adzopé", "Akoupé", "Guiglo", "Issia", "Bouaké-Koko", "Duekoué", "Touba", "Bouna", "Sakassou", "Tanda", 
        "Aboisso", "Béoumi", "Arrah", "Boundiali", "Zuénoula", "Abongoua", "Danané", "Téhini", "Guitry", "Transua", 
        "Oumé", "Katiola", "Grand-Lahou", "Biankouma", "Bettie", "Alépé", "Adiaké", "Bouaké-Sikensi", "Elibou", 
        "Botro", "Gonaté", "Bouaflé-Sikensi", "Guéyo", "Gonaté-Blignaut"
    ];

    const itemsCommunes = ["Abobo","Adjamé","Attécoubé","Cocody","Koumassi","Marcory","Plateau","Port-Bouët","Treichville","Yopougon"];

    return (
        <div className="sortBarContainer">
            <p className="nbreProduct">20 produits</p>
            <div className="containerToggle">
            <Toggle title="Trier" items={itemsTrier}/>
            <Toggle title="Pour qui: " items={itemsPourQui}/>
            <Toggle title="Villes" items={itemsVilles.sort()}/>
            <Toggle title="Communes d'Abidjan: " items={itemsCommunes.sort()}/>
            </div>
        </div>
    )
}

export default SortBar;