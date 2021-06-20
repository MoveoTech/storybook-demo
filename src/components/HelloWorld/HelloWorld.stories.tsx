import React from "react";
import { Meta, Story } from "@storybook/react";
import HelloWorld from "./HelloWorld";

// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: HelloWorld,
  title: "Components/HelloWorld",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <HelloWorld />;

// Here we define variants
export const Primary = Template.bind({});
