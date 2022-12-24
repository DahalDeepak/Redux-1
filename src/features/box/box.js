import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeWidth,
  changeHeight,
  changeBackgroundColor,
  changeBorderRadius,
  changeMargin,
} from "./box.slice";

const Box = () => {
  const { width, height, backgroundColor, padding, borderRadius, margin } =
    useSelector((state) => state.box);
  const dispatch = useDispatch();
  const circle = () => {
    dispatch(changeBorderRadius());
  };
  return (
    <>
      <h1>Box components </h1>
      <h4>
        defult: width: "30px", height: "20px", padding: "30px", margin: "20px",
        backgroundColor: "red", borderRadius: "8%",
      </h4>
      <br />
      <div
        style={{
          width: width,
          height: height,
          padding: padding,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          marginLeft: margin,
        }}
      ></div>
      <input
        placeholder="width"
        onKeyUp={(e) => dispatch(changeWidth(e.target.value))}
      />
      <input
        placeholder="height"
        onKeyUp={(e) => dispatch(changeHeight(e.target.value))}
      />
      <input
        placeholder="color"
        onKeyUp={(e) => dispatch(changeBackgroundColor(e.target.value))}
      />
      <input
        placeholder="Left margin"
        onKeyUp={(e) => dispatch(changeMargin(e.target.value))}
      />
      <button onClick={circle}> Change to circle</button>
    </>
  );
};

export default Box;
