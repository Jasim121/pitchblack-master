import React from "react";
import ReactDom from "react-dom";
import App from "./pages/_app";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import { useWindowDims } from "./hooks/useWindow";

const Root = () => {
  const { width, height } = useWindowDims();

  return (
    <div>
      <App />
    </div>
  );
};

ReactDom.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
