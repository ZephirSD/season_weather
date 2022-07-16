import React, { useEffect, useState } from 'react';
import sun from "../../assets/icones/sun_icon.png"
import rain from "../../assets/icones/rain_icon.png";


function Temperature({indic,weather}) {
  const [changeWeather,setChangeWeather] = useState();
  const [indicState,setIndicState] = useState();
  const functionWeather = async () => {
    let mainWeather = await weather;
    if(mainWeather !== undefined){
      mainWeather.map((weat) => (
        (weat.main) === 'Rain' ?  setChangeWeather(rain): (weat.main) === 'Clear' ? setChangeWeather(sun) : <></>
      ))
    }
  }
  const requestIndic = async () => {
    let resultatIndic = await indic;
    if(resultatIndic !== undefined){
      setIndicState(resultatIndic);
    }
  }
  useEffect(() => {
    functionWeather();
    requestIndic();
  })
  return (
    <>
      <div className='grid-meteo'>
        <div className='icon-box'>
            <img src={changeWeather} alt="meteo" className='image-meteo'/>
        </div>
        <div className='indic-meteo' style={indic > 25 ? {color:'#DC6969'} : {color:'#6296D5'}}>
            {`${Math.round(indicState)}°C`}
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

function Pression({img,indic}) {
  return (
    <>
      <div className='grid-meteo'>
        <div className='icon-box'>
            <img src={img} alt="vent" className='image-meteo'/>
        </div>
        <div className='indic-meteo'>
            {`${indic} hPa`}
        </div>
      </div>
    </>
  )
}

export {Temperature,Vent,Humidite,Pression}
