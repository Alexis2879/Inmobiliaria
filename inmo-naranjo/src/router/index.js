import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from "../App";
import Noticias from "../pages/Noticias";
import Propiedades from "../pages/Propiedades";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";
import BuscarPropiedades from "../pages/BuscarPropiedades";
import Ofreceuninmueble from "../pages/Ofreceuninmueble";
import Contactanos from "../pages/Contactanos";

const Router = () => {
    return (     
  
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}> 
                  <Route index element={<Inicio />} />
                  <Route path="noticias" element={<Noticias />} />
                  <Route path="propiedades" element={<Propiedades />} />
                  <Route path="buscarpropiedades" element={<BuscarPropiedades />} />
                  <Route path="ofreceuninmueble" element={<Ofreceuninmueble />} />   
                  <Route path="contactanos" element={ <Contactanos />} />

                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
)
};

export default Router;