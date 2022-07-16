import React, { useEffect, useState } from 'react'
import { listes_proverbes_jour, listes_proverbes_nuit } from './modules/Listes_Proverbes'

function Proverbes() {
    const [dateState, setDateState] = useState();
    let date = new Date();
    let hoursDisplay = date.getHours();
    useEffect(() =>{
        setInterval(() =>{
            setDateState(hoursDisplay);
        },1000)
    })
  return (
    <>
        <footer>
            {
                (dateState > 19 && dateState < 7) ? 
                listes_proverbes_nuit.map((listes,index) => (
                    index === 0 ? (<span key={listes.id}>{listes.proverbes}</span>) : (<></>)
                ))
                : 
                listes_proverbes_jour.map((listes,index) => (
                    index === 0 ? (<span key={listes.id}>{listes.proverbes}</span>) : (<></>)
                ))
            }
        </footer>
    </>
  )
}

export default Proverbes