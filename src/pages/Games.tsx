import './Games.css';
import MainTemplate from "../components/MainTemplate";
import { firebaseApp, firebaseDb } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import {useEffect, useState} from "react";
import {IonItem, IonLabel, IonList} from "@ionic/react";

// Temporary name.  Change to something more appropriate when it's clear what that would be.
const Games: React.FC = () => {
    const emptyGameData: any[] = [];
    const [games, setGames] = useState(emptyGameData)
    // const games: any[] = [];
    /*docs.forEach(doc => {
        games.push(doc.data())
    })*/

    useEffect(() => {
        getDocs(collection(firebaseDb, "games")).then(docs => {
            const data: any[] = []
            docs.forEach(doc => {
                data.push(doc.data());
            })
            setGames(data);
        })
    }, []);

    return (
        <MainTemplate name="games" nameDisplay="游戏数据列表">
            <IonList>
                {
                    games.map((game, index) => {
                        return (
                            <IonItem key={index}>
                                <IonLabel>Book: {game.book}</IonLabel>
                                <IonLabel>Game Host: {game.hostedBy}</IonLabel>
                            </IonItem>
                        )
                    })
                }
            </IonList>
        </MainTemplate>
    );
};

export default Games;

