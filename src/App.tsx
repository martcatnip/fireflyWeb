import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PunchCardDataEntry from "./pages/PunchCardDataEntry";
import ReadingDataEntry from "./pages/ReadingDataEntry";
import GameDataEntry from "./pages/GameDataEntry";
import GameDataDisplay from "./pages/GameDataDisplay";
import OverallProgress from "./pages/OverallProgress";
import IndividualProgress from "./pages/IndividualProgress";
import Help from "./pages/Help";
import Games from "./pages/Games";
import People from "./pages/People";
import ReadingActivities from "./pages/ReadingActivities";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/punch-card-data-entry" />
            </Route>{}
            <Route path="/page/punch-card-data-entry" exact={true} component={PunchCardDataEntry} />
            <Route path="/page/reading-data-entry" exact={true} component={ReadingDataEntry} />
            <Route path="/page/game-data-entry" exact={true} component={GameDataEntry} />
            <Route path="/page/game-data-display" exact={true} component={GameDataDisplay} />
            <Route path="/page/overall-progress" exact={true} component={OverallProgress} />
            <Route path="/page/individual-progress" exact={true} component={IndividualProgress} />
            <Route path="/page/help" exact={true} component={Help} />

            <Route path="/page/people" exact={true} component={People} />
            <Route path="/page/reading-activities" exact={true} component={ReadingActivities} />

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
