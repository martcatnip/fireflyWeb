import { useEffect, useState } from 'react'
import { trash } from 'ionicons/icons';
import { IonButton, IonContent, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLoading, IonModal, IonPage, IonRefresher, IonRefresherContent, IonToast, RefresherEventDetail } from '@ionic/react'
import { collection, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore"
import { firebaseDb as db } from "../Firebase";

import { Pages } from './index'
import { MainLayout } from "../layouts/MainLayout"
import { ItemFormTitleBar, ItemList } from '../components/index'

interface EntityPageProps {
    pageName: string,
    emptyItem: object,
    oldItem?: object,
}

export const EntityPage: React.FC<EntityPageProps> = (props) => {
    const [showItemForm, setShowItemForm] = useState(false)
    const [item, setItem] = useState(props.oldItem || props.emptyItem)

    const emptyItems: any[] = []
    const [items, setItems] = useState(emptyItems)
    const [showSpinner, setShowSpinner] = useState(true)
    const [spinnerProps, setSpinnerProps] = useState({
        onDidDismiss: () => {},
        message: '加载数据 ...',
        duration: 5000
    })

    const [showDataLoadingToast, setShowDataLoadingToast] = useState(false)

    const page = Pages[props.pageName]
    page.collectionName = page.pageName

    const addItemButton = <IonButton onClick={() => setShowItemForm(true)}>+ 添加{page.pageNameDisplay}记录</IonButton>

    const ItemFormFields = page.formFieldsComponent

    const layoutProps = {
        pageName: page.pageName,
        pageNameDisplay: page.pageNameDisplay,
        titleExtra: addItemButton
    }

    const saveItem = () => {
        updateSpinner(true, '保存数据 ...')

        const newId = Math.random().toString()
        setDoc(doc(db, page.collectionName, Math.random().toString()), item).then(() => {
            getItems()
        })
    }

    const itemFormTitleBarProps = {
        itemLabel: page.pageNameDisplay,
        onSaveButtonClicked: () => {
            saveItem()
            setShowItemForm(false)
        },
        onCancelButtonClicked: () => {
            setShowItemForm(false)
        },
        createOrEdit: props.oldItem && Object.keys(props.oldItem).length > 0 ? '编辑' : '添加',
    }

    const itemFormProps = {
        oldItem: props.oldItem,
        emptyItem: props.emptyItem,
        updateItem: (updatedItem: object) => {
            setItem(updatedItem)
        },
    }

    const getItems = (after?: any) => {
        updateSpinner(true, '加载数据 ...')

        getDocs(collection(db, page.collectionName)).then(docs => {
            const items: any[] = []
            docs.forEach(doc => {
                const data = doc.data()
                data.id = doc.id
                items.push(data);
            })
            setItems(items);

            updateSpinner(false)

            setShowDataLoadingToast(true)
            if (after) {
                after();
            }
        })
    }

    useEffect(() => {
        getItems()
    }, [])

    const doRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        getItems(() => event.detail.complete())
    }

    const refresher = (
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent />
        </IonRefresher>
    )

    const updateSpinner = (shouldOpen: boolean, message?: string) => {
        setShowSpinner(shouldOpen)
        if (message) {
            setSpinnerProps({
                ...spinnerProps,
                message: message
            })
        }
    }

    const ItemCard = page.itemCardComponent
    const deleteItem = (item: any) => {
        updateSpinner(true, '删除数据 ...')
        deleteDoc(doc(db, page.collectionName, item.id)).then(() => {
            getItems()
        })
    }

    const itemList = (
        <>{
            !Array.isArray(items) || items.length < 1 ? (
                <div className="ion-text-center ion-margin-top">
                    {showSpinner ? '' : `No ${page.itemType} found`}
                </div>
            ) : items.map((item: any, index) => {
                return <IonItemSliding key={index}>
                    <IonItem>
                        {/* this is the part different per entity */}
                        <ItemCard item={item} />
                    </IonItem>
                    <IonItemOptions className="ion-padding" color="red">
                        <IonItemOption color="none" onClick={() => deleteItem(item)}>
                            <IonIcon icon={trash} size="large" color="danger"></IonIcon>
                        </IonItemOption>
                    </IonItemOptions>

                </IonItemSliding>
            })
        }</>
    )
    
    return (
        <MainLayout {...layoutProps}>
            <IonModal isOpen={showItemForm}>
                <IonPage>
                    <ItemFormTitleBar {...itemFormTitleBarProps} />
                    <IonContent>
                        <ItemFormFields {...itemFormProps} />
                    </IonContent>
                </IonPage>
            </IonModal>

            <IonLoading {...spinnerProps} isOpen={showSpinner}/>

            {refresher}
            {itemList}
            
            <IonToast
                isOpen={showDataLoadingToast}
                onDidDismiss={() => setShowDataLoadingToast(false)}
                message="数据加载完成"
                color="success"
                duration={1500}
            />
        </MainLayout>
    )

    // TODO edit form -- slightly different from create new
}