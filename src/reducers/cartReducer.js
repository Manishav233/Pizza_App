export const cartReducer=(state={cartItems:[]},action)=>{
//we create cartReducer and add to store to access in child elements
switch(action.type)
{
case 'ADD_TO_CART':return{

...state,
cartItems:[...state.cartItems,action.paylaod]
}
default: return state
}
}