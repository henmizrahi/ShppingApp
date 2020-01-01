import React from "react"
import {noop} from './common'


export function ShopItem({item, deleteItem = noop}){
    return(
        <li 
        onDoubleClick ={() => deleteItem(item.id)} >
        {`Item: ${item.item} Amount: ${item.amount} Price: ${item.price}`} 
        </li>         

    );
}