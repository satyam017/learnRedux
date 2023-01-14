import { combineReducers } from "redux";
import cartItems from "./reducer";

console.log(cartItems);
export default combineReducers(
    {
        cartItems,
    }
)


