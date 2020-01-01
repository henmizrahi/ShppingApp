import React from "react";
import {MainSection} from "./MainSection"
import { ItemAdder , Button} from "./itemAdder";
import {useShopService} from './services/shopService'
import { ShoppingList } from "./shoppingList";
import { UseOrdersService } from "./services/orderService";




// background-color: ${props => props.theme.colors.secondary};
//   color: ${props => props.theme.colors.primary};






export function Cart(){
    
    const {
        items,
        deleteItem,
        addItem,
        deleteAll
    } = useShopService();

    const {
        addOrder
    } = UseOrdersService();

    const total = items.reduce((sum, item) => sum + (item.price*item.amount), 0);
  
    const ClickOrder = (total) => {
        const newDate = new Date();
        const date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
        addOrder(total, date );
        deleteAll();
    }

    return(
        <MainSection heading= "cart">
            <ItemAdder addItem = {addItem}/>
            <ShoppingList items = {items} deleteItem = {deleteItem}/>
            <h3>Total: {total}</h3>
            {items.length > 0 ? <Button onClick = {() => ClickOrder(total)}
            >order</Button> : <h4>No items :)</h4>}
        </MainSection>
    );
}