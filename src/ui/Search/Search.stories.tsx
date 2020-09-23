import { Meta, Story } from "@storybook/react/types-6-0";
import React, { useState } from "react";

import { SearchProps } from "ui/Search/Search.type";

import { Search } from "./Search";

export default {
  title: "UI/Search",
  component: Search
} as Meta;

type Option = {
  id: number;
  name: string;
};

const options = [
  { id: 1, name: "Thor" },
  { id: 2, name: "Natasha" },
  { id: 3, name: "Deadpool" }
];

const Template: Story<SearchProps<Option>> = (args) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  return (
    <>
      <Search
        {...args}
        value={inputValue}
        onInputChange={(event) => setInputValue(event.target.value)}
        onChange={(option) => setSelectedOption(option)}
        getOptionLabel={(option) => option.name}
      />
      <p style={{ marginTop: 20 }}>Selected option: {selectedOption?.name}</p>
    </>
  );
};

const Primary = Template.bind({});

Primary.args = {
  options,
  getOptionLabel: (option) => option.name
};

export { Primary };
