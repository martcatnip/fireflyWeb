import {useParams} from "react-router";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from "./ExploreContainer";

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
                    <IonMenuButton slot="start" auto-hide="false"/>
                    <IonTitle>{title}</IonTitle>
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
