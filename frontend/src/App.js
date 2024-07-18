import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CareTakersInfo from './Components/CareTakersInfo'
import Register from './Components/Register'
import MapComponent from './Components/MapComponent'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<CareTakersInfo/>}></Route>
                    <Route path='/register' exact element={<Register/>}></Route>
                    <Route path='/register' exact element={<Register/>}></Route>
                    <Route path='/maps' exact element={<MapComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

