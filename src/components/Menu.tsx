import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  title: string;
  url: string;
}

const appPages: AppPage[] = [
  {
    title: '录入打卡数据',
    url: '/page/punch-card-data-entry',
  },
  {
    title: '录入朗读数据',
    url: '/page/reading-data-entry',
  },
  {
    title: '录入游戏数据',
    url: '/page/game-data-entry',
  },
  {
    title: '输出游戏数据',
    url: '/page/game-data-display',
  },
  {
    title: '学生整体进展',
    url: '/page/overall-progress',
  },
  {
    title: '学生个人进展',
    url: '/page/individual-progress',
  },
  {
    title: 'People (temporary)',
    url: '/page/people',
  },
  {
    title: 'Reading Activities (WIP)',
    url: '/page/reading-activities',
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="page-list">
          <IonListHeader>萤火虫读书</IonListHeader>
          <IonNote>Reading is Fun!</IonNote>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
