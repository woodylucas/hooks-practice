import React from "react";
import Accordion from "./components/Accordion";

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

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
