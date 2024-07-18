import React from 'react';
import MapComponent from './components/MapComponent';
import 'leaflet/dist/leaflet.css';
import './App.css'

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <MapComponent />
        </div>
    );
};

export default App;
