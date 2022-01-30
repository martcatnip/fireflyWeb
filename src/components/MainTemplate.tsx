import {useParams} from "react-router";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonModal,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

import '../pages/Page.css';
import {ReactElement} from "react";

interface TemplateProps {
    name: string,
    nameDisplay?: string,
    titleExtra?: ReactElement<any>,
}

const MainTemplate: React.FC<TemplateProps> = ({ name, nameDisplay, titleExtra, children}) => {
    const title = nameDisplay || name.replace('-', ' ')
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                    <p slot="end" className="ion-padding-horizontal">{titleExtra}</p>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* children is the component occupying the "slot" in parent component */}
                {children}
            </IonContent>
        </IonPage>
    );
};

export default MainTemplate;
