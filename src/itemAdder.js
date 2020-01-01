import React, {useState} from "react"
import styled from "styled-components";
import {noop} from './common';


export const Input = styled.input`
margin : 10px
outline: none;
border-radius: 3px;
border: none;
transition: width 0.2s linear;
width: 10px;

:focus,
:not(:placeholder-shown) {
  width: 100px;
}
`;


export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;

  :active {s
    cursor: grab;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;



export function ItemAdder({addItem = noop}){

    const [item, setItem] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const isValid = item.length  > 0 && amount > 0 && price >=0;
    
    const submit = (item, amount, price) => {
        if (isValid) {
            addItem(item, amount, price);
            setItem(item);
            setAmount(amount);
            setPrice(price);
          }
    }



    return(
        <form  onSubmit={e => {
            e.preventDefault();
            submit(item, amount, price);
          }}>
        ItemName: <Input /*ref={input}*/ type="text" required onChange={e => setItem(e.target.value)} value={item} />
        Amount: <Input /*ref={input}*/ type="number" min = "1" required onChange={e => setAmount(e.target.value)}value={amount} />
        Price: <Input /*ref={input}*/ type="number" min = "0" required onChange={e => setPrice(e.target.value)} value={price} />
        <Button disabled={!isValid}>Add</Button>
    </form>
    )



}