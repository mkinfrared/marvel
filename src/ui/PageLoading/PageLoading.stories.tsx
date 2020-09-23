import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import Header from "ui/AppBar";

import { PageLoading } from "./PageLoading";

export default {
  title: "UI/PageLoading",
  component: PageLoading
} as Meta;

const Template: Story = () => (
  <>
    <Header />
    <PageLoading />
  </>
);

const Primary = Template.bind({});

Primary.args = {};

export { Primary };
