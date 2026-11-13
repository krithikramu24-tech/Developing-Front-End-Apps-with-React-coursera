import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const total = cart.reduce((sum, item) => {
      const unitPrice = parseFloat(item.cost.substring(1));
      return sum + unitPrice * item.quantity;
    }, 0);
    return Number.isInteger(total) ? total : total.toFixed(2);
  };
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };
  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const unitPrice = parseFloat(item.cost.substring(1));
    const total = unitPrice * item.quantity;
    return Number.isInteger(total) ? total : total.toFixed(2);
  };
