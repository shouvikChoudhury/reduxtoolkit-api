import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "./reduxToolkit";

const configStore = configureStore({
    reducer: { todolist: reduxReducer },
});

export default configStore;