import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import Card from "ui/Card";

import { Section } from "./Section";
import { SectionProps } from "./Section.type";

export default {
  title: "UI/Section",
  component: Section
} as Meta;

const Template: Story<SectionProps> = (args) => (
  <Section {...args}>
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
    <Card
      title="Dr. Strange"
      imageSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5239b5e7d7f70.jpg"
    />
  </Section>
);

const Primary = Template.bind({});

Primary.args = {
  title: "Dr. Strange images"
};

export { Primary };
