import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { Spinner } from "./Spinner";

export default {
  title: "UI/Spinner",
  component: Spinner
} as Meta;

const Template: Story = () => (
  <div style={{ padding: 20 }}>
    <div>
      <Spinner />
    </div>
    <div style={{ marginTop: 20 }}>
      <Spinner size={2} />
    </div>
  </div>
);

const Primary = Template.bind({});

Primary.args = {};

export { Primary };
