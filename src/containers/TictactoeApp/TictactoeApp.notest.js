import React from "react";
import ReactDOM from "react-dom";
import TictactoeApp from "./TictactoeApp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TictactoeApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
