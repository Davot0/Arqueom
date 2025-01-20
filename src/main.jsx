import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { App } from './app'
//import LandingPageCarol from './components/carol'
//import Jhojan from './components/jhojan'
//import Davot from './components/Davot'
//import Estefania from './components/estefania'
//import Manuela from './components/manuela'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      < App/> 
    </BrowserRouter>
  </StrictMode>,
)
