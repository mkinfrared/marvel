import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Card } from "./Card";
import { CardProps } from "./Card.type";

export default {
  title: "UI/Card",
  component: Card
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>Hello</Card>;
const Primary = Template.bind({});

Primary.args = {
  imageSrc: "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg",
  title: "Dr. Strange"
};

export { Primary };
