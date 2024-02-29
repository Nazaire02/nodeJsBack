import FlatList from "flatlist-react"
import categorie from "../classes/categorie";
import '../styles/Categorie.css'
import CardProduct from "../components/CardProduct";
import { useState } from "react";
import SortBar from "../components/SortBar";
import { Box, Button, ButtonProps, Typography, styled } from "@mui/material";
import MaintTitle from "../components/MainTitle";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: "#09a766",
        backgroundColor: "white",
        borderRadius: 20,
        margin: 2,
        '&:hover': {
            backgroundColor: "#09a766",
            color: "white"
        },
    }));

    const renderItem = (item: categorie, idx: any) => (
        <ColorButton variant="contained" onClick={() => setItemChoose(item)}>{item.label}</ColorButton>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            {!itemChoose &&
                <MaintTitle title="Beauté et cosmétique" />
            }
            {itemChoose &&
                <Box sx={{flexGrow:1, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <p onClick={() => setItemChoose(null)}><ArrowBackIcon /></p>
                    <MaintTitle title={itemChoose?.label}/>          
                </Box>
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
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
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
            </Box>
        </Box>
    )
}

export default Beaute_Cosmetique