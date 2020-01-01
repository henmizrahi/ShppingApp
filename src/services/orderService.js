import React ,{ useState, useContext , createContext} from "react";


const OrdersContext = createContext();

export const OrdersConsumer = OrdersContext.Consumer;

export function UseOrdersService() {
  return useContext(OrdersContext);
}



let _id = 0; 
const getId = () => _id++;
const createOrder = (total, date) =>({
   total,
   date,
   id: getId() 
});

const ORDERS = [];

export function OrderService({children}){

    const [orders, setOrders] = useState(ORDERS);

    const addOrder = (total,date) =>{
        const newOrder = createOrder(total,date);
        const newOrders = [newOrder, ...orders];
        setOrders(newOrders);
    };

    const ctx ={
        orders,
        addOrder
    }

    return(
        <OrdersContext.Provider value = {ctx}>
            {children}
        </OrdersContext.Provider>

    );
}