import { useState, useEffect } from 'react'
import { IonInput, IonItem, IonList } from '@ionic/react'
import { School } from '../data/DataTypes'

interface SchoolFormFieldsProps {
    oldItem?: School,
    emptyItem: School,
    createOrEdit: string,
    fieldValueChanged: (name: string, value: any) => void,
    updateItem: (item: object) => void,
}

export const SchoolFormFields: React.FC<SchoolFormFieldsProps> = (props) => {
    const [item, setItem] = useState(props.emptyItem)

    useEffect(() => {
        props.updateItem(item)
    }, [item])

    return (
        <IonList>
            <IonItem>
                <IonInput placeholder="校名"
                          value={item?.name}
                          onIonChange={(e) => setItem({...item, name: e.detail.value || ''})}
                />
            </IonItem>
            <IonItem>
                <IonInput placeholder="省份"
                          value={item?.province}
                          onIonChange={(e) => setItem({...item, province: e.detail.value || ''})}
                />
            </IonItem>
        </IonList>
    )
}