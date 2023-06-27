import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost} from "./slices/formSlice";

// Create store
const store = configureStore({
    // This object dictates the general shape of the store
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {store, changeName, changeCost, addCar, removeCar, changeSearchTerm, }