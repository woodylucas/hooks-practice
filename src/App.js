import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
  },
  {
    title: "Why use React?",
    content:
      "It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade if Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
}

export default App;
