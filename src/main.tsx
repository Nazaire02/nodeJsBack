import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Beaute_Cosmetique from './views/Beaute_Cosmetique.tsx';
import Soin_bien_etre from './views/Soin_bien_etre.tsx';
import Medicament_traitement from './views/Medicament_traitement.tsx';
import Vitamine_supplement from './views/Vitamine_supplement.tsx';
import Animaux_vegetaux from './views/Animaux_vegetaux.tsx';
import Pharmacie_garde from './views/Pharmacie_garde.tsx';
import DetailsProduct from './views/DetailsProduct.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "pharmacie/garde",
        element: <Pharmacie_garde />,
      },
      {
        path: "soin/bien_etre",
        element: <Soin_bien_etre />,
      },
      {
        path: "medicament/traitement",
        element: <Medicament_traitement/>,
      },
      {
        path: "Beaute/consmetique",
        element: <Beaute_Cosmetique />,
      },
      {
        path: "vitamine/supplement",
        element: <Vitamine_supplement />,
      },
      {
        path: "animaux/vegetaux",
        element: <Animaux_vegetaux />,
      },
      {
        path:"details/product",
        element: <DetailsProduct/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
<RouterProvider router={router} />
)
