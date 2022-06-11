import React, { useState } from "react";
import Progressbar from "react-js-progressbar";

export default function App(props) {
  const [percentage, setPercentage] = useState(10);

  const change_progressbar_input = () => {
    setPercentage(50);
  };

  return (
    <Progressbar
      customText={props.text}
      input={percentage}
      textPosition={{ x: "50%", y: "50%" }}
      pathWidth={50}
      pathColor="#FFA741" // use an array for gradient color.
      trailWidth={50}
      trailColor="#4176FF" // use a string for solid color.
      textStyle={{ fill: "#000", fontSize: 16, fontWeight: "bold" }} // middle text style
      pathLinecap="butt"
    />
  );
}
