import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import "normalize.css";
import { ShopService } from './services/shopService';
import { OrderService } from './services/orderService';


ReactDOM.render(
  <Router>
        <ShopService>
            <OrderService>
                <App />  
            </OrderService>
        </ShopService>
  </Router>
  ,document.getElementById("root")
);
