import { IonButton, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react'

interface ItemFormTitleBarProps {
    itemLabel: string,
    onSaveButtonClicked: () => void,
    onCancelButtonClicked: () => void,
    createOrEdit: string,
}

export const ItemFormTitleBar: React.FC<ItemFormTitleBarProps> = (props) => {
    return (
        <IonHeader translucent>
            <IonToolbar>
                <IonTitle slot="start">{props.createOrEdit}{props.itemLabel}记录</IonTitle>
                <p slot="end" className="ion-padding-horizontal">
                    <IonButton size="small" color="primary" onClick={props.onSaveButtonClicked}>
                        保存
                    </IonButton>
                    <IonButton size="small" color="light" onClick={props.onCancelButtonClicked}>
                        取消
                    </IonButton>
                </p>
            </IonToolbar>
        </IonHeader>
    )
}