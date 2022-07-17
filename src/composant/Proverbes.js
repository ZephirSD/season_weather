import React from 'react'
import { listes_proverbes_jour, listes_proverbes_nuit } from './modules/Listes_Proverbes'

function Proverbes({heuresDay}) {
  return (
    <>
        <footer style={(heuresDay > 18) ? {backgroundColor: 'var(--background-indic-night)', color: 'white'} : (heuresDay > 7) ? {backgroundColor: 'var(--background-indic)', color: 'black'} : {backgroundColor: 'var(--background-indic)', color: 'black'}}>
            {
                (heuresDay > 18) ? 
                listes_proverbes_nuit.map((listes,index) => (
                    index === 0 ? (<span key={listes.id}>{listes.proverbes}</span>) : (<></>)
                ))
                : (heuresDay > 7) ?
                listes_proverbes_jour.map((listes2,index2) => (
                    index2 === 0 ? (<span key={listes2.id}>{listes2.proverbes}</span>) : (<></>)
                )):
                <></>
            }
        </footer>
    </>
  )
}

export default Proverbes