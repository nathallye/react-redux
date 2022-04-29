import React from "react";

const UseCallbackButtons = (props) => {
  console.log("render...")

  return (
    <div>
      <buttom className="btn" onClick={() => props.inc(6)}>+6</buttom>
      <buttom className="btn" onClick={() => props.inc(12)}>+12</buttom>
      <buttom className="btn" onClick={() => props.inc(18)}>+18</buttom>
    </div>
  )
}

export default React.memo(UseCallbackButtons);