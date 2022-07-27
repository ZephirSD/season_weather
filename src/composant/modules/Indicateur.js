import React, { useEffect, useState } from 'react';
import sun from "../../assets/icones/sun_icon.png"
import rain from "../../assets/icones/rain_icon.png";
import cloud_icon from "../../assets/icones/cloud_icon_indic.png";

function Temperature({indic,weather,tempMin,tempMax}) {
  const [changeWeather,setChangeWeather] = useState();
  const [indicState,setIndicState] = useState();
  const [tempMinState,setTempMinState] = useState();
  const [tempMaxState,setTempMaxState] = useState();
  const functionWeather = async () => {
    let mainWeather = await weather;
    if(mainWeather !== undefined){
      mainWeather.map((weat) => (
        (weat.main) === 'Rain' ?  setChangeWeather(rain) : (weat.main) === 'Clear' ? setChangeWeather(sun) : (weat.main) === 'Clouds' ? setChangeWeather(cloud_icon) : <></>
      ))
    }
  }
  const requestIndic = async () => {
    let resultatIndic = await indic;
    let resultatTempMin = await tempMin;
    let resultatTempMax = await tempMax;
    if(resultatIndic !== undefined){
      setIndicState(resultatIndic);
    }
    if(resultatTempMin !== undefined){
      setTempMinState(resultatTempMin);
    }
    if(resultatTempMax !== undefined){
      setTempMaxState(resultatTempMax);
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
        <div className='grid-indic-meteo'>
          <div className='indic-meteo' style={indic > 25 ? {color:'#DC6969'} : {color:'#6296D5'}}>
              {`${Math.round(indicState)}°C`}
          </div>
          <div className='grid-temp-indic'>
            <span className='temp-max'>{`${Math.round(tempMaxState)}°C`}</span>
            <span className='temp-min'>{`${Math.round(tempMinState)}°C`}</span>
          </div>
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
            <img src={img} alt="vent" className='image-meteo' style={{ transform: `rotateZ(${degre}deg)`, width: '60px', height: '60px', marginTop: '10px'}}/>
        </div>
        <div className='indic-meteo' style={{color: '#668FFF'}}>
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
        <div className='indic-meteo' style={{color: '#1795F6'}}>
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
        <div className='indic-meteo' style={{color: '#1795F6'}}>
            {`${indic} hPa`}
        </div>
      </div>
    </>
  )
}

function Cloud({img,indic}) {
  return (
    <>
      <div className='grid-meteo'>
        <div className='icon-box'>
            <img src={img} alt="vent" className='image-meteo'/>
        </div>
        <div className='indic-meteo' style={{color: '#43464B'}}>
            {`${indic}%`}
        </div>
      </div>
    </>
  )
}

function Moon({moonPhase}) {
  return (
    <>
      <div className="visibilite">
        {`${(moonPhase * 100)}% de visibilité`}
      </div>
      {
        (moonPhase === 0.5 || moonPhase === 1 || moonPhase === 0 || moonPhase === 0.25 || moonPhase === 0.75) ? (<><div className="phase_lune">{(moonPhase === 0) ? 'Nouvelle Lune' : (moonPhase === 1) ? 'Pleine Lune' : (moonPhase === 0.25) ? 'Premier quartier de lune' : (moonPhase === 0.75) ? 'Dernier quartier de lune' : <></>}</div></>) : (<></>)
      }
    </>
  )
}

export {Temperature,Vent,Humidite,Pression,Cloud,Moon}
