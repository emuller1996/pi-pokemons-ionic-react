import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonProgressBar,
} from "@ionic/react";
import { Pokemon } from "../../models/Pokemon";
import "./CardPokemon.css";

const CardPokemonComponent = (prosps: Pokemon) => {
  return (
    <>
      <IonCard className="card-pokemon">
        <IonCardHeader>
          <IonCardTitle>
            <div className="img-container">
              <img className="img-pokemon" src={prosps.img} alt="ss" />
            </div>
          </IonCardTitle>
          <IonCardTitle className="title-pokemon"> {prosps.name}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
           HP
          <IonProgressBar className="stat-pokemon-bar" color="tertiary" value={(prosps.vida)/100}></IonProgressBar>
          Attack
          <IonProgressBar className="stat-pokemon-bar" color="tertiary" value={(prosps.ataque)/100}></IonProgressBar>


        </IonCardContent>
      </IonCard>
    </>
  );
};

export default CardPokemonComponent;
