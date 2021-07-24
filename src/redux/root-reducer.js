import { combineReducers } from "redux";
import userReducer from "./user/user.reduser";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    users: userReducer,
    cart: cartReducer
}) 