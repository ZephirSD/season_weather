import React from "react";
import eteImage from "../assets/background/ete-image.png";
import automneImage from "../assets/background/automne-image.png";
import hiverImage from "../assets/background/hiver-image.jpg";
import printempsImage from "../assets/background/printemps-wallpaper.png";

function TitreSaison({ jour, mois }) {
  const dateAct = `${mois - 1}/${jour}`;
  const dateEte = "06/21";
  const dateAutomne = "09/23";
  const dateHiver = "12/21";
  const datePrintemps = "03/20";
  const [monthAct, dayAct] = dateAct.split("/");
  const [monthEte, dayEte] = dateEte.split("/");
  const [monthAut, dayAut] = dateAutomne.split("/");
  const [monthHiv, dayHiv] = dateHiver.split("/");
  const [monthPrin, dayPrin] = datePrintemps.split("/");
  const actDate = new Date("", monthAct, dayAct);
  const eteDate = new Date("", monthEte - 1, dayEte);
  const autDate = new Date("", monthAut - 1, dayAut);
  const hivDate = new Date("", monthHiv - 1, dayHiv);
  const prinDate = new Date("", monthPrin - 1, dayPrin);
  return (
    <>
      <div
        className="case-saison"
        style={
          actDate > eteDate && actDate < autDate ? (
            { backgroundImage: `url(${eteImage})` }
          ) : actDate > autDate && actDate < hivDate ? (
            { backgroundImage: `url(${automneImage})` }
          ) : actDate > hivDate && actDate < prinDate ? (
            { backgroundImage: `url(${hiverImage})` }
          ) : actDate > prinDate && actDate < eteDate ? (
            { backgroundImage: `url(${printempsImage})` }
          ) : (
            <></>
          )
        }
      >
        <h2 className="titre-saison">
          {actDate > eteDate && actDate < autDate ? (
            "été"
          ) : actDate > autDate && actDate < hivDate ? (
            "automne"
          ) : actDate > hivDate && actDate < prinDate ? (
            "hiver"
          ) : actDate > prinDate && actDate < eteDate ? (
            "printemps"
          ) : (
            <></>
          )}
        </h2>
      </div>
    </>
  );
}

export default TitreSaison;
