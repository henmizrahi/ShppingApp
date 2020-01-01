import React from "react";
import {ShopItem} from './ShopItem';

export function ShoppingList({ items, deleteItem }) {
  return (
    <ul>
      {items.map(item => (
        <ShopItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}