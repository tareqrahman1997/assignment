import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);


    let total = 0;
    for (let i = 0;i<cart.length;i++){
        const addFriend = cart[i];
        total = total + addFriend.salary;
    }

    


    return (
        <div className="friend-list">
            <h2>this is friend list</h2>
            <h5>Add friend:{cart.length}</h5>
            <p>total salary:{total}</p>
        
        </div>
    );
};

export default Cart;