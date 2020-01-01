import React, {  createContext, useContext, useState } from "react";

const ItemsContext = createContext();

export const ItemsConsumer = ItemsContext.Consumer;

export function useShopService() {
  return useContext(ItemsContext);
}


let _id = 0;
const getId = () => _id++;
const createItem = (item, amount, price) => ({
  item,
  amount,
  price,
  id: getId()
});

const ITEMS = [
  createItem("shoe", 1, 120),
  createItem("shirt", 2 , 100)
];


export function ShopService({children}){

    const [items, setitems] = useState(ITEMS);
 
    const deleteItem = itemId => {
        const itemsAfterChange = items.filter(item => item.id !== itemId);
        setitems(itemsAfterChange);
    };

    const addItem = (item, amount, price) => {
        const newItem = createItem(item, amount, price);
        const newItems = [newItem, ...items];
        setitems(newItems);
    };

    const deleteAll = () =>{
        setitems([]);
    };

    const ctx = {
        items,
        deleteItem,
        addItem,
        deleteAll
    }

    return (
        <ItemsContext.Provider value={ctx}>
            {children}
        </ItemsContext.Provider>
    );
}