import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CareTakersInfo from './Components/CareTakersInfo'
import Register from './Components/Register'
import MapComponent from './Components/MapComponent'
import Calendar from './Components/Calender'
import Corousel from './Components/Corousel'
import Start from './Components/Start'
import CareTakerHome from './Components/CareTakerHome'


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Start/>}></Route>
                    <Route path='/caretaker' exact element={<CareTakerHome/>}></Route>
                    <Route path='/caretaker-register' exact element={<CareTakersInfo/>}></Route>
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

