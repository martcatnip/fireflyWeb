import './People.css';
import MainTemplate from "../components/MainTemplate";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {firebaseDb} from "../Firebase";
import {IonItem, IonLabel, IonList} from "@ionic/react";

// Temporary name.  Change to something more appropriate when it's clear what that would be.
const People: React.FC = () => {
    const emptyPeopleData: any[] = [];
    const [people, setPeople] = useState(emptyPeopleData)

    useEffect(() => {
        getDocs(collection(firebaseDb, "people")).then(docs => {
            const data: any[] = []
            docs.forEach(doc => {
                data.push(doc.data());
            })
            setPeople(data);
        })
    }, []);

    return (
        <MainTemplate name="people" nameDisplay="项目人员">
            <IonList>
                {
                    people.map((person, index) => {
                        return (
                            <IonItem key={index}>
                                <IonLabel>Roles: {person.roles}</IonLabel>
                                <IonLabel>Name: {person.name}</IonLabel>
                                <IonLabel>School: {person.school}</IonLabel>
                                <IonLabel>Birth Year: {person.birthYear}</IonLabel>
                            </IonItem>
                        )
                    })
                }
            </IonList>
        </MainTemplate>
    );
};

export default People;

