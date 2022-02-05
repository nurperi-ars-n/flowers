import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalAmount: 0,
    items: [
        // так должны попадать цветы в стор
        // {price: 1200, quantity: 1, totalPrice: 1200, id: '', name: ''}    
    ],
    
}


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalAmount++

            if(!existingItem) {
                state.items.push({id: newItem.id, quantity: 1, price: newItem.price, totalPrice: newItem.price, title: newItem.title, url: newItem.url })
            } else {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalAmount--

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        }

    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer