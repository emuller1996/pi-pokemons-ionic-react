import React, { useEffect, useState } from "react";
import { IonCol, IonGrid, IonInfiniteScroll, IonInfiniteScrollContent, IonRow, useIonViewDidEnter } from "@ionic/react";
import CardPokemonComponent from "./CardPokemon";
import axios from "axios";
import { Pokemon } from "../../models/Pokemon";
const PokemonsComonent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return () => {
      console.log("DESMONTE");
    };
  }, []);

  useIonViewDidEnter(() => {
    console.log("ionViewDidEnter event fired");
    getAllPokemons();
  });

  const getAllPokemons = async () => {
    setLoading(true)
    const result = await axios.get("http://15.228.232.99:3030/pokemons");
    console.log(result.data.pokemons);
    setPokemons(result.data.pokemons);
    setLoading(false)
  };

  return (
    <div className="container">
      <IonGrid>
        <IonRow>
            
          {!loading ? (
            pokemons?.map((pokemon:Pokemon) => (
              <IonCol sizeXl="3" sizeMd="4" sizeSm="6" size="12">
                <CardPokemonComponent  id={pokemon.id} img={pokemon.img} name={pokemon.name} ataque={pokemon.ataque} vida={pokemon.vida}  />
              </IonCol>
            ))
          ) : (
            <p>Cargando . . .</p>
          )}
        </IonRow>
      </IonGrid>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          console.log('dasds')
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </div>
  );
};

export default PokemonsComonent;
