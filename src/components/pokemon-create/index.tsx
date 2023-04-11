import React, { useEffect, useState } from 'react';
import { IonButton, IonCheckbox, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, useIonToast } from '@ionic/react';
import "./index..css"
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Pokemon } from '../../models/Pokemon';

const PokemonCreateComponent: React.FC = () => {


   const [types, setTypes] = useState<{name: string, id:number}[]>([]);
   const [typesSelected, setTypesSelected] = useState<{name: string, id:number}[]>([]);
   const [pokemonCreate, setPokemonCreate] = useState<Pokemon>({
      name: '',
      id:0,
      img:'',
      ataque:0,
      vida:0,
      defensa:0,
      velocidad:0,
      peso:0,
      altura:0
   });

   const [present] = useIonToast();

  

   useEffect(() => {
      getAllTypes()
      console.log(types);

     return () => {
       console.log('DESMONETE')
     }
   }, [])

   const presentToast = (position: 'top' | 'middle' | 'bottom') => {
      present({
        message: 'POKEMON CREATED!',
        duration: 1500,
        position: position
      });
    };

   const onHandlePokemonCreate = (e:any)=>{
      console.log(e.target.value)
      setPokemonCreate({...pokemonCreate , [e.target.name]:e.target.value})
     
   }

   const getAllTypes = async() => {
      console.log("getAllTypes")
      const options = {
         url: "https://pi-pokemon-main-production.up.railway.app/types",
         headers: { "Content-Type": "application/json" },
       };
       try {const response: HttpResponse = await CapacitorHttp.get(options);
         console.log(response);
         setTypes(response.data.types)
       } catch (err:any) {
         console.log(err);         
       }
   }

   const handleTypeChange = function (e:any) {

      console.log(e.target.value)
      const typesIn = typesSelected.find( t => t.id===e.target.value);
      if(typesIn){
         setTypesSelected(typesSelected.filter( t => t.id !== e.target.value ))
      }else{
         setTypesSelected([...typesSelected, { id: e.target.value, name: e.target.name }]);
      }
      
    };

    const submitCreate = async (e:any) => {
      e.preventDefault();
      console.log('Submit')
      console.log(Object.assign(pokemonCreate,{ types : typesSelected }));
      const options = {
         url: "https://pi-pokemon-main-production.up.railway.app/pokemons",
         headers: { "Content-Type": "application/json" },
         data : Object.assign(pokemonCreate,{ types : typesSelected })
       };

       try {const response: HttpResponse = await CapacitorHttp.post(options);
         console.log(response);
         presentToast('top')
         
       } catch (err:any) {
         console.log(err);         
       }

    }
   

    return (
      <div>
        <form action="" onSubmit={submitCreate} className='container'>

        <IonGrid>
        <IonRow>
          <IonCol  id="1" size="12">
              <IonInput className='form-control'  placeholder="Nombre Pokemon" name='name' value={pokemonCreate?.name} onIonInput={(e:any) =>onHandlePokemonCreate(e)} />
          </IonCol>

          <IonCol id="2" sizeMd="6" sizeXl="3" sizeSm="6" size="6"> 
             <IonInput className='form-control'  type='number' placeholder="HP" name='vida' value={pokemonCreate?.vida === 0 ? '' : pokemonCreate?.vida} onIonInput={(e:any) =>onHandlePokemonCreate(e)} />
          </IonCol>
          <IonCol id="3"  sizeMd="6" sizeXl="3" sizeSm="6" size="6"> 
             <IonInput className='form-control'  type='number' placeholder="Attack" name='ataque' value={pokemonCreate?.ataque} onIonInput={(e:any) =>onHandlePokemonCreate(e)} />
          </IonCol>
          <IonCol id="4"  sizeMd="6" sizeXl="3" sizeSm="6" size="6"> 
             <IonInput className='form-control'  type='number' placeholder="Defense"  name='defensa' value={pokemonCreate?.defensa} onIonInput={(e:any) =>onHandlePokemonCreate(e)} />
          </IonCol>
          <IonCol id="5"  sizeMd="6" sizeXl="3" sizeSm="6" size="6"> 
             <IonInput className='form-control'  type='number' placeholder="Speed"   name='velocidad' value={pokemonCreate?.velocidad} onIonInput={(e:any) =>onHandlePokemonCreate(e)} />
          </IonCol>
          <IonCol id="6"  sizeMd="6" sizeXl="3" sizeSm="6" size="6"> 
             <IonInput className='form-control'  type='number'  placeholder="Width"   name='peso' value={pokemonCreate?.peso} onIonInput={(e:any) =>onHandlePokemonCreate(e)} />
          </IonCol>
          <IonCol id="7"  sizeMd="6" sizeXl="3" sizeSm="6" size="6"> 
             <IonInput className='form-control'  type='number' placeholder="Heigth"   name='altura' value={pokemonCreate?.altura} onIonInput={(e:any) =>onHandlePokemonCreate(e)} />
          </IonCol>
          <IonCol id="8"   size="12"> 
             <p>TYPES</p>
             
                  <IonCheckbox > <IonLabel>Label</IonLabel>sdasd</IonCheckbox>
                  <IonRow>

                  

             {
               
               types && types.map( t => ( 
                  <IonCol key={t.name} sizeMd="6" sizeXl="3" sizeSm="6" size="6">

                     <label htmlFor={t.name} className="form-control">
                     <IonCheckbox id={t.name} value={t.id} name={t.name} onClick={handleTypeChange}> </IonCheckbox>
                     {t.name}
                     </label>

                  </IonCol>
               ))
             }
             </IonRow>
          </IonCol>
          <IonCol id="9"   size="12">

          <IonButton type='submit'>Guardar Pokemon</IonButton>
          </IonCol>

        </IonRow>
      </IonGrid>

        </form>
      </div>
    );
  };

export default PokemonCreateComponent;
