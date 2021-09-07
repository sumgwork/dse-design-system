import React from "react";
import ReactDom from "react-dom";
import { Button, Color, Text } from "@ds.e/react";

ReactDom.render(
  <div>
    <Button label="Hi" />
    <Color hexCode="#000" height="xxxl" width="xxl" />
    <Text size="xl">New Text</Text>
  </div>,
  document.querySelector("#root")
);
