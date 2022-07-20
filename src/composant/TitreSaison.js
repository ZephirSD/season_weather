import React from "react";

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
      <div className="case-saison">
        <h2 className="titre-saison">
          {actDate > eteDate && actDate < autDate ? (
            "Ete"
          ) : actDate > autDate && actDate < hivDate ? (
            "Automne"
          ) : actDate > hivDate && actDate < prinDate ? (
            "Hiver"
          ) : actDate > prinDate && actDate < eteDate ? (
            "Printemps"
          ) : (
            <></>
          )}
        </h2>
      </div>
    </>
  );
}

export default TitreSaison;
