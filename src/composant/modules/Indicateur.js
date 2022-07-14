import React, { useEffect, useState } from 'react';
import sun from "../../assets/icones/sun_icon.png"
import rain from "../../assets/icones/rain_icon.png";


function Temperature({indic,weather}) {
  const [changeWeather,setChangeWeather] = useState();
  const functionWeather = () => {
    if(weather === 'Clear'){
      setChangeWeather(sun);
      console.log('clear');
    }
    else if(weather === 'Rain'){
      setChangeWeather(rain);
      console.log("rain");
    }
  }
  useEffect(() => {
    functionWeather();
  })
  return (
    <>
      <div className='grid-meteo'>
        <div className='icon-box'>
            <img src={changeWeather} alt="meteo" className='image-meteo'/>
        </div>
        <div className='indic-meteo' style={indic > 25 ? {color:'#DC6969'} : {color:'#6296D5'}}>
            {`${Math.round(indic)}°C`}
        </div>
      </div>
    </>
  )
}

function Vent({img,indic,degre}) {
  return (
    <>
      <div className='grid-meteo'>
        <div className='icon-box'>
            <img src={img} alt="vent" className='image-meteo' style={{ transform: `rotateZ(${degre}deg)`}}/>
        </div>
        <div className='indic-meteo'>
            {`${Math.round(indic * (3600/1000))}km/h`}
        </div>
      </div>
    </>
  )
}

function Humidite({img,indic}) {
  return (
    <>
      <div className='grid-meteo'>
        <div className='icon-box'>
            <img src={img} alt="vent" className='image-meteo'/>
        </div>
        <div className='indic-meteo'>
            {`${indic}%`}
        </div>
      </div>
    </>
  )
}

export {Temperature,Vent,Humidite}
