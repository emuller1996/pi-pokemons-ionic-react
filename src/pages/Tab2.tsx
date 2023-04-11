import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import PokemonCreateComponent from '../components/pokemon-create';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Pokemon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Create your pokemons</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PokemonCreateComponent/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
