import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyCream } from "../redux/cream/creamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.cream.numOfCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyCream());

  return {
    buyItem: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
