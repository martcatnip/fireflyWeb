import { ReactElement } from "react";
import { useParams } from "react-router";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

interface LayoutProps {
    pageName: string,
    pageNameDisplay?: string,
    titleExtra?: any,
}

export const MainLayout: React.FC<LayoutProps> = (props) => {
    const title = (props.pageNameDisplay || props.pageName).replace('-', ' ')
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                    <p slot="end" className="ion-padding-horizontal">{props.titleExtra}</p>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* children is the component occupying the "slot" in parent component */}
                {props.children}
            </IonContent>
        </IonPage>
    );
};
