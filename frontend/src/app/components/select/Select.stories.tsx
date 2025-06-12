import { Meta, StoryObj } from "@storybook/react";
import { BuiltSelect, Select } from "./Select";

const meta = {
  title: "components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BuiltSelect
      placeholder="Select a fruit"
      options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
    />
  ),
};
