import React from "react"


export function OrdersItem({order}){
    return(
        <li>
            {`Date: ${order.date} Total: ${order.total}`}
        </li>
    )
}