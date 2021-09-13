import React from "react";
import ReactDom from "react-dom";
import { Button, Color, Text, Margin, Select } from "@ds.e/react";

const selectOptions = [
  {
    value: "havenly-green",
    label: "Havenly Green",
  },
  {
    value: "strict-black",
    label: "Strict Black",
  },
  {
    value: "pink",
    label: "Pink",
  },
];

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
    <Margin space="lg" top>
      <Select
        onOptionSelected={(option, optionIndex) => {
          console.log(
            "🚀 ~ file: index.tsx ~ line 18 ~ optionIndex",
            optionIndex
          );
          console.log("🚀 ~ file: index.tsx ~ line 18 ~ option", option);
        }}
        options={selectOptions}
      />
    </Margin>
  </div>,
  document.querySelector("#root")
);
