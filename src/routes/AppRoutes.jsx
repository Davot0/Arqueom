import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { LandingPageCarol, Jhojan, Estefania, Manuela } from '../components/Dis-01-25/'
import Davot from '../components/Davot'

import { Welcome } from '../components/Welcome'


export const Routess = () => {
  return (
    <>
      <Routes>
        <Route path='carol' element={<LandingPageCarol/>} />
        <Route path='estefania' element={<Estefania/>} />
        <Route path='jhojan' element={<Jhojan/>} />
        <Route path='manuela' element={<Manuela />} />
        <Route path='davot' element={<Davot />} />
        <Route path='welcome' element={<Welcome />} />

        <Route path="/*" element={ <Navigate to="/welcome" /> } />
      </Routes>

    </>
  )
}

