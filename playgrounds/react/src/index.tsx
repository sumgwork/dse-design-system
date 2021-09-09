import React from "react";
import ReactDom from "react-dom";
import { Button, Color, Text, Margin } from "@ds.e/react";

ReactDom.render(
  <div>
    <Margin>
      <Button label="Hi" />
    </Margin>
    <Margin>
      <Color hexCode="#000" height="xxxl" width="xxl" />
    </Margin>
    <Margin space="lg" top>
      <Text size="xl">New Text</Text>
    </Margin>
  </div>,
  document.querySelector("#root")
);
