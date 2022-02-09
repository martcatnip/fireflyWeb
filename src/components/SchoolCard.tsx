import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import { School } from '../data/DataTypes'

interface SchoolCardProps {
    item: School,
    deleteItem: () => void,
}

export const SchoolCard: React.FC<SchoolCardProps> = (props) => {
    const school = props.item

    return (
        <IonCard style={{width: '100%'}}>
            <IonCardHeader>
                <IonCardSubtitle>
                    位置: {school?.province}
                </IonCardSubtitle>
                <IonCardTitle>
                    {school?.name}
                </IonCardTitle>
            </IonCardHeader>
        </IonCard>
    )
}