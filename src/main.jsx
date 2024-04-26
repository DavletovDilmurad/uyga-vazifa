import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Navbar from "./navbar";

import UseProvider from "./usecontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UseProvider>
    <div className="flex justify-center ml-0 pb-10 pt-5 p-10">
      <div>
        <Navbar />
        <App />
      </div>
    </div>
  </UseProvider>
);
