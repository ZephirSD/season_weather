import React from "react";
import { listes_proverbes_jour, listes_proverbes_nuit } from "./modules/Listes_Proverbes";

function Proverbes({ heuresDay, dayMonths }) {
  return (
    <>
      <footer
        style={
          heuresDay >= 18
            ? {
                backgroundColor: "var(--background-indic-night)",
                color: "white",
              }
            : heuresDay >= 7
            ? { backgroundColor: "var(--background-indic)", color: "black" }
            : { backgroundColor: "var(--background-indic)", color: "black" }
        }
      >
        {heuresDay >= 18 ? (
          listes_proverbes_nuit.map((listes) =>
            listes.id === dayMonths ? (
              <span key={listes.id}>{listes.proverbes}</span>
            ) : (
              <></>
            )
          )
        ) : heuresDay >= 7 ? (
          listes_proverbes_jour.map((listes2) =>
            listes2.id === dayMonths ? (
              <span key={listes2.id}>{listes2.proverbes}</span>
            ) : (
              <></>
            )
          )
        ) : (
          <></>
        )}
      </footer>
    </>
  );
}

export default Proverbes;
