import React from "react";
import { useState, CSSProperties } from "react";
import {FadeLoader} from "react-spinners";
// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };
function Loader({value}) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("blue");
  return (
    <>
      <FadeLoader
        color={color}
        loading={value}
        cssOverride={{display: "block",margin: "0 auto",borderColor: "blue",borderTop:"none",borderLeft:""}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export default Loader;
