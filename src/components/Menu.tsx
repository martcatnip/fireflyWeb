import {
  isPlatform,
  IonContent,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonText
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';
import './Menu.css';
import { Pages } from '../pages/index'

interface AppPage {
  title: string;
  url: string;
  mobileAppOnly?: boolean,
}

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="page-list">
          <IonListHeader>萤火虫教育</IonListHeader>
          <IonNote>英语阅读项目</IonNote>
          {
            Object.keys(Pages).map((key: string) => {
              const page = Pages[key]
              return page.visible ? (
                  <div key={key}>
                    {!page.mobileAppOnly || (isPlatform('android') && !isPlatform('mobileweb')) ? (
                        <IonMenuToggle key={key} autoHide={false}>
                          <IonItem className={location.pathname === '/page' + page.url ? 'selected' : ''} href={'/page' + page.url} routerDirection="none" lines="none" detail={false}>
                            <IonLabel>{page.pageNameDisplay}</IonLabel>
                          </IonItem>
                        </IonMenuToggle>
                    ) : ''}
                  </div>
              ) : ''
            })
          }
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
