import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line react-refresh/only-export-components
const UserCredentials = {
    data: [],
    cart: [],
    searchTerm: '',
    TotalQuantity: 0,
    Total: 0,
};

export const userReducer = createSlice({
    name: 'user',
    initialState: UserCredentials,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            console.log("checkData", action.payload);
        },
        addCart: (state, action) => {
            state.cart.push(action.payload);
            console.log("addCart", action.payload);
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
});

export const { setData, addCart, setSearchTerm } = userReducer.actions;

export default userReducer.reducer;