import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Button } from "./Button";
import { ButtonProps } from "./Button.type";

export default {
  title: "UI/Button",
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Hello</Button>;
const Primary = Template.bind({});

export { Primary };
