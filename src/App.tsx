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
import { Pages } from './pages/index'

setupIonicReact();

const App: React.FC = () => {
  const browser = navigator.userAgent.toLowerCase()
  const isWechat = browser.indexOf('wechat') >= 0 || browser.indexOf('wexin') >= 0

  if (isWechat) {
    return (
        <div className="ion-padding">
          <div style={{ borderBottom: 'solid 1px lightgrey' }}>
            <p className="ion-margin-top">Good System 网站在微信环境中有可能无法正常运行。请转到手机浏览器：</p>
            <ol>
              <li>点击右上角菜单（三个点） ↗ </li>
              <li>点击在浏览器中打开的菜单选项</li>
            </ol>
          </div>

          <div>
            <p>This application may not work properly in WeChat environment. Please do the following:</p>
            <ol>
              <li>Click on the three-dot menu on top right ↗ </li>
              <li>Click on open in browser</li>
            </ol>
          </div>
        </div>
    )
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/about" />
            </Route>{}
            {/*<Route path="/page/punch-card-data-entry" exact={true} component={PunchCardDataEntry} />
            <Route path="/page/reading-data-entry" exact={true} component={ReadingDataEntry} />
            <Route path="/page/game-data-entry" exact={true} component={GameDataEntry} />
            <Route path="/page/game-data-display" exact={true} component={GameDataDisplay} />
            */}

              {
                  Object.keys(Pages).map((key: string) => {
                      const page = Pages[key]
                      return <Route key={key} path={'/page' + page.url} exact={true} component={page.component} />
                  })
              }
              {/*<Route path="/page/about" exact={true} component={Pages.about.component} />
              <Route path="/page/about" exact={true} component={Pages.about.component} />
*/}
            {/*<Route path="/page/overall-progress" exact={true} component={OverallProgress} />
            <Route path="/page/individual-progress" exact={true} component={IndividualProgress} />

            <Route path="/page/about" exact={true} component={About} />

            <Route path="/page/books" exact={true} component={Books} />
            <Route path="/page/people" exact={true} component={People} />
            <Route path="/page/reading-activities" exact={true} component={ReadingActivities} />
            <Route path="/page/reading-logs" exact={true} component={ReadingLogs} />
            <Route path="/page/schools" exact={true} component={Schools} />*/}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
