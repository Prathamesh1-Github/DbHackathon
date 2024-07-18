import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CareTakersInfo from './Components/CareTakersInfo'
import Register from './Components/Register'
import MapComponent from './Components/MapComponent'
import Calendar from './Components/Calender'
import Corousel from './Components/Corousel'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<CareTakersInfo/>}></Route>
                    <Route path='/register' exact element={<Register/>}></Route>
                    <Route path='/register' exact element={<Register/>}></Route>
                    <Route path='/map' exact element={<MapComponent/>}></Route>
                    <Route path='/calender' exact element={<Calendar/>}></Route>
                    <Route path='/corousel' exact element={<Corousel/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

