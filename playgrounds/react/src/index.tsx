import React from "react";
import ReactDom from "react-dom";
import { Button, Color } from "@ds.e/react";

ReactDom.render(
  <div>
    <Button label="Hi" />
    <Color hexCode="#000" height="xxxl" width="xxl" />
  </div>,
  document.querySelector("#root")
);
