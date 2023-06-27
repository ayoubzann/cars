import { createSlice } from "@reduxjs/toolkit";

//creating slice for the form-states
const formSlice = createSlice({
    //Three properties needs to be present: Name, InitialState, and Reducers

    name: "form",
    // Here, initialState is an object because there are two different states to keep track of
    initialState: {
        name: "",
        cost: 0,
    },
    // Here are the reducers that are going to be changing state over time
    reducers: {
        // Creating a function that takes in state and an action
        changeName(state, action){
            // Modify the current name to the new name assigned to the payload
            state.name = action.payload;
        },
        changeCost(state, action){
            state.cost = action.payload;
        }
    }
});

// Export the actions from the slice
export const {changeName, changeCost} = formSlice.actions;
// Export the combined reducer from the slice
export const formReducer = formSlice.reducer;