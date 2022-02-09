import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import { Book } from '../data/DataTypes'

interface BookCardProps {
    item: Book,
}

export const BookCard: React.FC<BookCardProps> = (props) => {
    const book = props.item

    return (
        <IonCard style={{width: '100%'}}>
            <IonCardHeader>
                {
                    book?.coverUrl ? <img style={{ maxHeight: '100px' }} src={book?.coverUrl} /> : ''
                }
                <IonCardSubtitle>
                    ISBN: {book?.isbn}
                </IonCardSubtitle>
                <IonCardTitle>
                    {book?.title}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Cover: {book?.coverUrl}
            </IonCardContent>
        </IonCard>
    )
}