import React from "react";
import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

// args in TS way
const Template: Story<CardProps> = (args) => <Card {...args} />;

export const V1 = Template.bind({});
V1.args = {
  title: "Card Title 1",
  body: "Card Body",
  withFooter: true,
};

export const V2 = Template.bind({});
V2.args = {
  title: "Card Title 2",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  withFooter: false,
};
