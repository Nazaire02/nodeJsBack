import './styles/App.css'
import logoPharmacie from "./assets/logoPharmacie.png";
import searchIcon from './assets/search-svgrepo-com.svg';
import accountIcon from './assets/account-svgrepo-com.svg';
import basketIcon from './assets/basket-svgrepo-com.svg';
import Beaute_Cosmetique from './views/Beaute_Cosmetique';
import { useState } from 'react';
import './index.css';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './colors';
import NavItems from './components/NavItems';
import Footer from './components/Footer';


function App() {
  const [selectedLink, setSelectedLink] = useState("1");

  return (
    // <div className='container flex flex-col m-0'>
    //   <div className='flex flex-row items-center'>
    //     <div className='flex flex-row items-center mr-96'>
    //       <h2 className='ml-4'>PharmaPix</h2>
    //       <img src={logoPharmacie} alt="ml-0" className='w-13 h-14' />
    //     </div>
    //     <div className='flex flex-row items-center'>
    //       <div className='flex flex-row rounded-3xl border-2 border-gray-500 items-center mr-40'>
    //         <input type="text" placeholder='Rechercher un produit' className='ml-3 pl-2 focus:outline-none appearance-none w-full' />
    //         <img src={searchIcon} alt="" className='mr-3' />
    //       </div>
    //       <div className='flex flex-row items-center mr-40'>
    //         <img src={accountIcon} alt="" className='mr-1' />
    //         <p className=''>Compte</p>
    //       </div>
    //       <div className='flex flex-row items-center'>
    //         <img src={basketIcon} alt="" className='' />
    //         <p className=''>Panier</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='horizontal_barre w-screen h-1' />
    //   <div className='nav flex flex-row items-center border-b-2 w-screen'>
    //     <div className='pl-3  border-r-2 nav_item'><Link to="Beaute/consmetique" className={selectedLink === "1" ? 'nav_element selected' : 'nav_element'} onClick={() => setSelectedLink("1")}>Beauté<br />& Cosmétiques</Link></div>
    //     <div className='pl-3 border-r-2 nav_item'><Link to="soin/bien_etre" className={selectedLink === "2" ? 'nav_element selected' : 'nav_element'} onClick={() => setSelectedLink("2")}>Soins<br />& Bien etre</Link></div>
    //     <div className='pl-3 border-r-2 nav_item'><Link to="medicament/traitement" className={selectedLink === "3" ? 'nav_element selected' : 'nav_element'} onClick={() => setSelectedLink("3")}>Médicaments<br />& Traitements</Link></div>
    //     <div className='pl-3 border-r-2 nav_item'><Link to="vitamine/supplement" className={selectedLink === "5" ? 'nav_element selected' : 'nav_element'} onClick={() => setSelectedLink("5")}>Vitamines<br />& Suppléments</Link></div>
    //     <div className='pl-3 border-r-2 nav_item'><Link to="animaux/vegetaux" className={selectedLink === "6" ? 'nav_element selected' : 'nav_element'} onClick={() => setSelectedLink("6")}>Animaux<br />& Végétaux</Link></div>
    //     <div className='pl-3'><Link to="pharmacie/garde" className={selectedLink === "7" ? 'nav_element selected' : 'nav_element'} onClick={() => setSelectedLink("7")}>Pharmacie de<br /> garde</Link></div>
    //   </div>
    //   <div>
    //     <Outlet />
    //   </div>
    //   <div className='footer'>
    //     <p>Le premier bien de l'homme c'est la santé!!!</p>
    //     <div>
    //       <div><a href="">@CopyRight2024 N'DOUFFOU Manda Nazaire</a></div>
    //       <div className='barre_entre_menu'><a href="">Qui sommes nous ?</a></div>
    //       <div className='barre_entre_menu'><a href="">Contacts</a></div>
    //     </div>
    //   </div>
    // </div>
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
        <Box
          sx={{
            flexGrow: 1,
            height: 4,
            bgcolor: 'text.primary',
          }}
        />
        <NavItems />
        <Box>
          <Outlet />
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}

export default App
