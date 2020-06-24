import React from "react";
import { connect } from "react-redux";
import { buyCream } from "../redux/cream/creamActions";

function CreamContainer(props) {
  return (
    <div>
      <h2>Number of creams : {props.numOfCreams}</h2>
      <button onClick={props.buyCream}>Buy Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCreams: state.cream.numOfCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCream: () => dispatch(buyCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreamContainer);
