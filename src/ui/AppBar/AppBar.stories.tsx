import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import Button from "ui/Button";
import Input from "ui/Input";

import { AppBar } from "./AppBar";

export default {
  title: "UI/AppBar",
  component: AppBar
} as Meta;

const Template: Story = () => (
  <AppBar>
    <Button>I am a button</Button>
    <Input value="" onChange={() => null} />
  </AppBar>
);

const Primary = Template.bind({});

export { Primary };
