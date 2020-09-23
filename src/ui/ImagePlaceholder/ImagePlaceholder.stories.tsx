import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { ImagePlaceholder } from "./ImagePlaceholder";
import { ImagePlaceholderProps } from "./ImagePlaceholder.type";

export default {
  title: "UI/ImagePlaceholder",
  component: ImagePlaceholder
} as Meta;

const Template: Story<ImagePlaceholderProps> = (args) => (
  <ImagePlaceholder {...args} />
);

const Primary = Template.bind({});

Primary.args = {
  width: 300,
  height: 400
};

export { Primary };
