import './styles/App.css'
import logoPharmacie from "./assets/logoPharmacie.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Beaute_Cosmetique from './views/Beaute_Cosmetique';
import CardProduct from './components/CardProduct';
import { useState } from 'react';

function App() {
  const [navElementActive, setNavElementActive] = useState("Beauté et cosmétique")

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
        <div><a href="">Beauté<br />& Cosmétiques</a></div>
        <div className='barre_entre_menu'><a href="">Soins<br />& Bien etre</a></div>
        <div className='barre_entre_menu'><a href="">Médicaments<br />& Traitements</a></div>
        <div className='barre_entre_menu'><a href="">Vitamines<br />& Suppléments</a></div>
        <div className='barre_entre_menu'><a href="">Animaux<br />& Végétaux</a></div>
        <div className='barre_entre_menu'><a href="">Pharmacie de<br /> garde</a></div>
      </div>
      <h4>{navElementActive}</h4>
      <div>
        <div className='categorie_container'>
          <Beaute_Cosmetique />
        </div>
        <div>
          <CardProduct/>
        </div>
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
