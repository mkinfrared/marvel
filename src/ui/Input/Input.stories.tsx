import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { InputProps } from "ui/Input/Input.type";

import { Input } from "./Input";

export default {
  title: "UI/Input",
  component: Input
} as Meta;

const Template: Story<InputProps> = (args) => (
  <div style={{ width: 300 }}>
    <Input {...args} />
  </div>
);

const Primary = Template.bind({});

Primary.args = {
  label: "This is label"
  // onChange: { action: "Change" } as any,
  // onFocus: { action: "Focus" } as any,
  // onBlur: { action: "Blur" } as any
};

export { Primary };
