import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonProgressBar,
} from "@ionic/react";
import { Pokemon } from "../../models/Pokemon";
import "./CardPokemon.css";
import { Link, useHistory } from "react-router-dom";

const CardPokemonComponent = (prosps: Pokemon) => {
  const history = useHistory()
  return (
    <>
      <IonCard className="card-pokemon">
        <IonCardHeader>
          <IonCardTitle>
            <div className="img-container">
              <img className="img-pokemon" src={prosps.img} alt="ss" />
            </div>
          </IonCardTitle>
          <IonCardTitle className="title-pokemon"> 
          <a href={`/pokemon-detail/${prosps.id}`}>{prosps.name}</a>
            
          
          {/* <Link to={`/pokemon-detail/${prosps.id}`} >
            {prosps.name}
          </Link> */}
          </IonCardTitle>
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
