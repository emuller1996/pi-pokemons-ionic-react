import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PokemonDetailComponent from '../components/pokemon-detail';
import './Tab3.css';
import { RouteComponentProps, useHistory, useLocation, useParams } from 'react-router';


const Tab3: React.FC = () => {

  
  const history =  useHistory()
  const location = useLocation()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PokemonDetailComponent />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
