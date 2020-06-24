import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of hooks cakes : {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}
