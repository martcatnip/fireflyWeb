import { useState, useEffect } from 'react'
import { IonInput, IonItem, IonList } from '@ionic/react'
import { Book } from '../data/DataTypes'

interface BookFormFieldsProps {
    oldItem?: Book,
    emptyItem: Book,
    createOrEdit: string,
    fieldValueChanged: (name: string, value: any) => void,
    updateItem: (item: object) => void,
}

export const BookFormFields: React.FC<BookFormFieldsProps> = (props) => {
    const [item, setItem] = useState(props.emptyItem)

    useEffect(() => {
        props.updateItem(item)
    }, [item])

    return (
        <IonList>
            <IonItem>
                <IonInput placeholder="书名"
                          value={item?.title}
                          onIonChange={(e) => setItem({...item, title: e.detail.value || ''})}
                />
            </IonItem>
            <IonItem>
                <IonInput placeholder="ISBN"
                          value={item?.isbn}
                          onIonChange={(e) => setItem({...item, isbn: e.detail.value || ''})}
                />
            </IonItem>
            <IonItem>
                <IonInput placeholder="封面图链接"
                          value={item?.coverUrl}
                          onIonChange={(e) => setItem({...item, coverUrl: e.detail.value || ''})}
                />
            </IonItem>
        </IonList>
    )
}