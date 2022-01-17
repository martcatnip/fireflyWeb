import {useParams} from "react-router";
import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";

import '../pages/Page.css';

interface TemplateProps {
    name: string,
    nameDisplay?: string
}

const MainTemplate: React.FC<TemplateProps> = ({ name, nameDisplay, children}) => {
    const title = nameDisplay || name.replace('-', ' ')
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div style={{padding: '30px'}}>
                {/* children is the component occupying the "slot" in parent component */}
                {children}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MainTemplate;
