import { UseOrdersService } from "./services/orderService";
import React from "react";
import {MainSection} from "./MainSection"
import {OrderList} from "./ordersList"
import { UseRedirect } from "./hook/countRedirect";



export function Orders(){

    const{
        orders,
    } = UseOrdersService();

    const ttr = UseRedirect("/cart");
    
    return(
        <MainSection heading= "Orders">
            {orders.length === 0 ? <h3>Redirace To Cart Page in {ttr}..</h3> :
            <OrderList orders = {orders}/>}
        </MainSection>
    );
}