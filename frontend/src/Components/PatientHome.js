import React from 'react';
import CarouselComponent from './CarouselComponent';
import './Styles/PatientHome.css';

function PatientHome() {
  const btnArray = [
    { name: "Contact", routeAddr: "route1" },
    { name: "Quiz", routeAddr: "route1" },
    { name: "Meditation", routeAddr: "route1" },
    { name: "Solve My Confusion", routeAddr: "route1" }
  ];

  return (
    <div className='container'>
      <div className='upperContainer'>
        <CarouselComponent />
      </div>
      <div className='lowerContainer'>
        <div className='gridButtons'>
          {btnArray.map((item, index) => {
            return (
              <button type='button' key={index}>{item.name}</button>
            );
          })}
        </div>
        <button type="button">SOS</button>
      </div>
    </div>
  );
}

export default PatientHome;
