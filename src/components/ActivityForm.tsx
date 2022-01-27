import {
    IonBadge,
    IonButtons,
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonDatetime,
    IonHeader,
    IonInput,
    IonItem,
    IonItemDivider,
    IonList,
    IonModal,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonToolbar,
    IonTitle, IonIcon, IonLabel, IonText, IonSearchbar
} from "@ionic/react";
import { format, parseISO } from 'date-fns';
import {Person, PersonHistoryItem, ReadingActivity} from "../data/DataTypes";
import { firebaseApp, firebaseDb } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import {useState} from "react";
import {addCircleOutline} from "ionicons/icons";

interface ActivityFormProps {
    afterSave: () => void,
    onCancel: () => void,
    oldActivity?: ReadingActivity,
}

const ActivityForm: React.FC<ActivityFormProps> = ({afterSave, onCancel, oldActivity, children}) => {
    const emptyActivity: ReadingActivity = {
        hostedBy: '',
        enteredBy: '', // current user
        book: '',
        activityDate: '',
        participants: [],
        type: 'game',
    };
    const emptyParticipants: Person = {
        name: '',
        bornInYear: 0,
        currentSchool: '',
        teachers: [],
        history: [],
    };
    const emptyParticipantResults: Person[] = [];

    const [activity, setActivity] = useState(oldActivity || emptyActivity);
    const [searchParticipantResults, setSearchParticipantResults] = useState(emptyParticipantResults);
    const [searchParticipantText, setSearchParticipantText] = useState('');
    const [participants, setParticipants] = useState([]);
    const [showDatetimePicker, setShowDatetimePicker] = useState(false);

    const onSave = () => {
        // TODO
        afterSave()
    };

    const updateActivity = (field: string, value: any) => {
        setActivity({
            ...activity,
            [field]: value,
        })
    }
    const formatDate = (value: string) => {
        return format(parseISO(value), 'MMM dd yyyy HH:ii:ss');
    };

    const datetimeChanged = (e: any) => updateActivity('activityDate', formatDate(e.detail.value!))

    const confirmDatetime = () => {
        setShowDatetimePicker(false);
    };

    const lookupParticipant = (e: any) => {
        // setSearchParticipantText(e.detail.value!)

        const foundPeople = [
            {
                name: 'student A',
                bornInYear: 2011,
                currentSchool: 'school 1',
                teachers: [],
                history: [],
            },
            {
                name: 'student B',
                bornInYear: 2012,
                currentSchool: 'school 2',
                teachers: [],
                history: [],
            },
        ];

        setSearchParticipantResults(searchParticipantText ? foundPeople : [])
    }

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle slot="start">录入阅读活动</IonTitle>
                    <p slot="end" className="ion-padding-horizontal">
                        <IonButton size="small" color="primary" onClick={onSave}>
                            保存
                        </IonButton>
                        <IonButton size="small" color="light" onClick={onCancel}>
                            取消
                        </IonButton>
                    </p>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <section className="ion-margin-top ion-margin-horizontal">
                    <IonText color="secondary">
                        <i>录入人: 当前用户（自动填写）</i>
                    </IonText>
                </section>
                <IonList>
                    <IonItem>
                        <IonText color="medium">选择活动类型：</IonText>
                        <IonSelect interface="popover"
                                   value={activity.type}
                                   onIonChange={(e) => updateActivity('type', e.detail.value || '')}
                        >
                            <IonSelectOption value="game">游戏</IonSelectOption>
                            <IonSelectOption value="reciting">朗读</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder="绘本 (TBD: pick from list or enter new)"
                                  value={activity.book}
                                  onIonChange={(e) => updateActivity('book', e.detail.value || '')}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder="日期时间 (缺省为当前时间)"
                                  value={activity.activityDate}
                                  onIonChange={(e) => updateActivity('activityDate', e.detail.value || '')}
                        />
                        <IonButton color="medium" onClick={() => setShowDatetimePicker(true)}>输入日期时间</IonButton>
                        <IonModal isOpen={showDatetimePicker}>
                            <div className="ion-text-center ion-margin-top">
                                <IonDatetime onIonChange={(e) => datetimeChanged(e)} locale="zh-CN"/>
                                <IonItemDivider />
                                <IonButton color="light" onClick={() => setShowDatetimePicker(false)}>返回</IonButton>
                            </div>
                        </IonModal>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder="主持人 (TBD: pick from list or enter new)"
                                  value={activity.hostedBy}
                                  onIonChange={(e) => updateActivity('hostedBy', e.detail.value || '' )}
                        />
                    </IonItem>
                </IonList>

                <IonList>
                    <IonRow>
                        <IonCol>
                            <IonLabel className="ion-padding-horizontal" color="medium">参与学生</IonLabel>
                        </IonCol>
                        <IonCol className="ion-text-end ion-padding-horizontal">
                            <IonButton size="small">+ 搜索/输入 (TBD: bottom sheet)</IonButton>
                        </IonCol>
                    </IonRow>
{/*                    <IonSearchbar
                        show-clear-button="focus"
                        value={searchParticipantText}
                        onIonChange={(e) => lookupParticipant(e)}
                        placeholder="学生 (TBD: pick from list or enter new)"
                    />*/}
                    {/*<IonItem>

                         Search Result
                        <IonList>
                            {
                                searchParticipantResults.map((p: Person, index) => (
                                    <IonItem key={index}>
                                        {p.name}
                                    </IonItem>
                                ))
                            }
                        </IonList>
                    </IonItem>*/}
                </IonList>


                <section>
                    <IonBadge color="light" className="ion-margin-horizontal">学生甲</IonBadge>
                    <IonBadge color="light" className="ion-margin-horizontal">学生乙</IonBadge>
                    <IonBadge color="light" className="ion-margin-horizontal">学生丙</IonBadge>
                    <IonBadge color="light" className="ion-margin-horizontal">学生丁</IonBadge>
                    <IonBadge color="light" className="ion-margin-horizontal">学生戊</IonBadge>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default ActivityForm;