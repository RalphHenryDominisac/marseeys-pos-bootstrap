import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OrderTypeButtons from '../bootstrapComponents/OrderTypeButtons';
import "../styles.css";
import Typography from "@mui/material/Typography";
import SubTotalAndProceedButton from '../bootstrapComponents/SubTotalAndProceedButton';
import DecrementIncrementCounter from '../bootstrapComponents/DecrementIncrementCounter';
import { useState } from "react";


export default function OrderSidePage(props) {

    const[orderCartItems, setOrderCartItems] = useState(props.cart);

   return (
     <React.Fragment>
       <Col sm={4}>
         Order Details for Order #___ :
         <OrderTypeButtons />
         {props.cart.map((item) => (
           <p key={item.id}>
             {item.name} Php{item.price * item.qty}
             <button
               onClick={() => {
                 props.updateCartItems((prevState) => ({
                   ...prevState,
                   qty: this.qty - 1,
                 }));
               }}
             >
               -
             </button>
             Qty:
             {item.qty}{" "}
             <button onClick={() => {props.updateCartItems((prevState) => ({
                ...prevState, 
                  qty: this.qty + 1,
             })); }}>
               +
             </button>
           </p>
         ))}
         <SubTotalAndProceedButton />
       </Col>
     </React.Fragment>
   );
}
