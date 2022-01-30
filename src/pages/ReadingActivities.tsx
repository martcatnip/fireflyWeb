import './ReadingActivities.css';
import MainTemplate from "../components/MainTemplate";
import { firebaseApp, firebaseDb } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import {useEffect, useState} from "react";
import {IonButton, IonCard, IonCardContent, IonCardHeader,IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, useIonModal, IonSpinner} from "@ionic/react";
import ActivityForm from "../components/ActivityForm";

const ReadingActivities: React.FC = () => {
    const emptyReadingActivitiesData: any[] = [];

    const [loading, setLoading] = useState(true);
    const [readingActivities, setReadingActivities] = useState(emptyReadingActivitiesData)
    const [showModal, setShowModal] = useState(false);

    const getActivities = () => {
        getDocs(collection(firebaseDb, "readingActivities")).then(docs => {
            const data: any[] = []
            docs.forEach(doc => {
                data.push(doc.data());
            })
            setReadingActivities(data);

            data.map(a => {

            })
            setLoading(false);
        })
    }

    const loadingSpinner = () => (
        <div className="ion-text-center ion-margin-top">
            <IonSpinner name="dots" />
        </div>
    );

    const getActivityType = (activityType: string) => activityType === 'reciting' ? '朗读' : (activityType === 'game' ? '游戏' : '?');

    const activitiesList = () => loading ? loadingSpinner() : (
        !Array.isArray(readingActivities) || readingActivities.length < 1 ? (
            <div className="ion-text-center ion-margin-top">
                No activity found
            </div>
        ) : readingActivities.map((activity, index) => {
            return (
                <IonCard key={index} button>
                    <IonCardHeader>
                        <IonCardSubtitle>
                            <IonRow>
                                <IonCol>
                                    <div className="ion-text-start">
                                        {getActivityType(activity.type)}
                                        主持人: {activity.hostedBy}
                                    </div>
                                </IonCol>
                                <IonCol>
                                    <div className="ion-text-end">
                                        {(new Date(activity.activityDate.seconds * 1000)).toDateString()}
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonCardSubtitle>
                        <IonCardTitle>
                            <IonRow>
                                <IonCol>
                                    绘本: {activity.book}
                                </IonCol>
                            </IonRow>
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonRow>
                            <IonCol>
                                <p className="ion-text-start">
                                    参加人数：{activity.participants ? activity.participants.length : 0}
                                </p>
                            </IonCol>

                        </IonRow>
                    </IonCardContent>
                </IonCard>
            )
        })
    );


    const afterSave = () => {
        getActivities();
        setShowModal(false);
    };

    const addActivityButton = () => (
        <IonButton onClick={() => setShowModal(true)}>+ 新活动</IonButton>
    );

    useEffect(() => {
        getActivities();
    }, []);

    return (
        <MainTemplate name="reading-activities" nameDisplay="所有阅读活动" titleExtra={addActivityButton()}>
            <IonModal isOpen={showModal}>
                <ActivityForm afterSave={afterSave} onCancel={() => setShowModal(false)} />
            </IonModal>

            <div className="ion-text-center ion-margin-top">
                <IonLabel color="secondary" >
                    Work in Progress
                </IonLabel>
            </div>

            {activitiesList()}
        </MainTemplate>
    );
};

export default ReadingActivities;

