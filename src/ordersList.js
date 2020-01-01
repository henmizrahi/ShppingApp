import React from "react"
import {OrdersItem} from "./ordersItem"


export function OrderList({orders}) {
    return (
      <ul>
        {orders.map(order => (
          <OrdersItem
            key={order.id}
            order={order}
          />
        ))}
      </ul>
    );
  }