import { useState } from "react";

//    export const updateItem = (colors, initialColor) => {
export const useUpdateItem = (propName: string, propValue: any, oldItem: any) => {
    const [item, setItem] = useState(oldItem);

    const updateItem = () => {
        if (propName) {
            setItem({
                ...oldItem,
                [propName]: propValue,
            });
        } else {
            setItem(oldItem);
        }
    };

    return [item, updateItem];
}
