import './styles/App.css'
import logoPharmacie from "./assets/logoPharmacie.png";
import Beaute_Cosmetique from './views/Beaute_Cosmetique';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='logo_title_block'>
          <h2>PharmaPix</h2>
          <img src={logoPharmacie} alt="" className='logo' />
        </div>
        <div className='search_block'>
          <input type="text" placeholder='search...' />
        </div>
      </div>
      <div className='horizontal_barre' />
      <div className='nav'>
        <div><Link to="Beaute/consmetique" className='nav_element'>Beauté<br />& Cosmétiques</Link></div>
        <div className='barre_entre_menu'><Link to="soin/bien_etre" className='nav_element'>Soins<br />& Bien etre</Link></div>
        <div className='barre_entre_menu'><Link to="medicament/traitement" className='nav_element'>Médicaments<br />& Traitements</Link></div>
        <div className='barre_entre_menu'><Link to="vitamine/supplement" className='nav_element'>Vitamines<br />& Suppléments</Link></div>
        <div className='barre_entre_menu'><Link to="animaux/vegetaux" className='nav_element'>Animaux<br />& Végétaux</Link></div>
        <div className='barre_entre_menu'><Link to="pharmacie/garde" className='nav_element'>Pharmacie de<br /> garde</Link></div>
      </div>
      <div>
      <Outlet/>
      </div>
      <div className='footer'>
        <p>Le premier bien de l'homme c'est la santé!!!</p>
        <div>
          <div><a href="">@CopyRight2024 N'DOUFFOU Manda Nazaire</a></div>
          <div className='barre_entre_menu'><a href="">Qui sommes nous ?</a></div>
          <div className='barre_entre_menu'><a href="">Contacts</a></div>
        </div>
      </div>
    </div>
  )
}

export default App
