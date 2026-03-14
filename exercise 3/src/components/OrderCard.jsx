import React, { useState } from "react";

export default function OrderCard({order, index , onQuantityChange}) {

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{order.price} $</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={() => onQuantityChange(index ,order.quantity > 0 ? order.quantity - 1 : 0 )}>-</div>
        <h4>{order.quantity} </h4>
        <div className="order-button" onClick={() => onQuantityChange(index , order.quantity + 1) }>+</div>
      </div>
    </div>
  );
}
