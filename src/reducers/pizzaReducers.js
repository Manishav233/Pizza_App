export const getAllPizzasReducer=(state={pizza:[]},action)=>{
switch(action.type)
{
case 'GET_PIZZAS_REQUEST':return{
loading:true,
...state
}
case 'GET_PIZZAS_SUCCEESS':return{
loading:false,
pizzas: action.paylaod
}
case 'GET_PIZZAS_FAILED':return{

error: action.paylaod,
loading:false
}
default :return state
}
}