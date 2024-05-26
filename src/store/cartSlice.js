import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state,actions){
            const newItem = actions.payload;
            // to check if the item is already in cart then increase quantity 
            const existingItem = state.itemsList.find((item) => {
                return item.id === newItem.id;
            });
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state,actions){
            const id = actions.payload;
            const itemToDelete = state.itemsList.find((item) => {
                return item.id === id;
            })
            if(itemToDelete.quantity === 1){
                state.itemsList = state.itemsList.filter((item)=> item.id !== id);
                state.totalQuantity--;
            } else{
                itemToDelete.quantity--;
                itemToDelete.totalPrice -= itemToDelete.price;
            }
        },
        setShowCart(state){
            state.showCart = !state.showCart;
        },
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;