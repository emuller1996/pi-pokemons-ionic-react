import { useIonViewDidEnter, useIonViewDidLeave, useIonViewWillLeave } from "@ionic/react";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { PokemonDetaild } from "../../models/PokemonDetails";



const PokemonDetailComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetaild>();

 /*  useEffect( () => {
    getPokemonsDetail();
  },[]) */

  

  useIonViewDidEnter(() => {
    console.log("useIonViewDidEnter");
    console.log("MONTE>>PokemonDtailComponent");


    getPokemonsDetail();

  },[]);

  useIonViewWillLeave(()=> {
    
    setPokemonDetail(new PokemonDetaild)
    console.log("DESMONTE>>PokemonDtailComponent");
    console.log(pokemonDetail);


  } )

  const getPokemonsDetail = async () => {
    setPokemonDetail(new PokemonDetaild);

    setLoading(true);
    const options = {
      url: "http://15.228.232.99:3030/pokemons/" + id,
      headers: { "Content-Type": "application/json" },
    };
    const response: HttpResponse = await CapacitorHttp.get(options);

    setLoading(false);
    console.log(response.data.pokemon);
    setPokemonDetail(response.data.pokemon);
  };

  return (
    <div className="container">
      <h4>Pokemon Detail {id}</h4>
      <img src={pokemonDetail?.sprites.other.dream_world.front_default} alt="SAD" />
      <h5>{pokemonDetail && pokemonDetail.name}</h5>
      <h5>
        {pokemonDetail &&
          pokemonDetail.abilities.map((c) => (
            <>
              <p>{c.ability.name}</p>
            </>
          ))}
      </h5>

    </div>
  );
};

export default PokemonDetailComponent;
