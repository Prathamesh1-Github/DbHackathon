import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CareTakersInfo from './Components/CareTakersInfo'
import Register from './Components/Register'
import MapComponent from './Components/MapComponent'
import Calendar from './Components/Calender'
import Corousel from './Components/Corousel'
import VideoCall from './Components/VideoCall'
import RoomPage from './Components/RoomPage'
import DementiaDiaries from './Components/DementiaDiaries'
import ProfilePage from './Components/ProfilePage'

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
                    <Route path="/videocall" exact element={<VideoCall/>}></Route>
                    <Route path="/videocall/:id" exact element={<RoomPage/>}></Route>
                    <Route path="/profile" exact element={<ProfilePage/>}></Route>
                    <Route path="/dementiatypes" element={<DementiaTypes />} />
                    <Route path="/dementiadiaries" element={<DementiaDiaries />} />
                    <Route path="/helpsection" element={<HelpSection />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

