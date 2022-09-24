import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from "./App";
import Noticias from "./routes/Noticias";
import Propiedades from "./routes/Propiedades";
import Inicio from "./routes/Inicio";
import NotFound from './routes/NotFound';
import BuscarPropiedades from './routes/BuscarPropiedades';
import Ofreceuninmueble from './routes/Ofreceuninmueble';
import Contactanos from './routes/Contactanos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);


