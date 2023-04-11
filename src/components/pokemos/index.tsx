import React, { useEffect, useState } from "react";
import {
  IonCol,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonRow,
  useIonViewDidEnter,
} from "@ionic/react";
import CardPokemonComponent from "./CardPokemon";
import axios from "axios";
import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { Pokemon } from "../../models/Pokemon";
const PokemonsComonent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{error: boolean, message: string}>({error:false, message:''})  


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
    setLoading(true);
      setError({error:false,message:'ERRROR : 404'});

    const options = {
      url: "https://pi-pokemon-main-production.up.railway.app/pokemons",
      headers: { "Content-Type": "application/json" },
    };

    

    try {const response: HttpResponse = await CapacitorHttp.get(options);

      setPokemons(response.data.pokemons);
      setLoading(false);

      console.log(response);
      
    } catch (err:any) {
      console.log(err);
      setError({error:true,message:'ERRROR : 404'});
      setLoading(false);

      
    }
  };

  return (
    <div className="container">
      <IonGrid>
        <IonRow>

            {
              error?.error && ( <p className="text-center">{error.message}</p>) 
            }


          {!loading ? (
            pokemons?.map((pokemon: Pokemon) => (
              <IonCol sizeXl="3" sizeMd="4" sizeSm="6" size="12">
                <CardPokemonComponent
                  id={pokemon.id}
                  img={pokemon.img}
                  name={pokemon.name}
                  ataque={pokemon.ataque}
                  vida={pokemon.vida}
                  defensa={pokemon.defensa} velocidad={0} peso={0} altura={0}                />
              </IonCol>
            ))
          ) : (
            <p>Cargando . . .</p>
          )}
        </IonRow>
      </IonGrid>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          console.log("dasds");
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </div>
  );
};

export default PokemonsComonent;
