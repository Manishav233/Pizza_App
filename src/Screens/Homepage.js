import React, { useState,useEffect } from "react";
import pizzas from "../Pizzadata";
import { useDispatch ,useSelector} from "react-redux";
import Pizza from "../Components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
export default function Homepage() {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAllPizzas())
},[])
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4">
              <div>
                <Pizza pizza={pizza}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
