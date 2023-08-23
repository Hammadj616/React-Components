import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import Select from "./components/select";
import Table from "./components/table";
import Card from "./components/card";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const optionsList = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const data = [
    {
      id: 1,
      userName: "User 1",
      age: 25,
      institute: "ABC Institute",
      isActive: true,
      category: "Category A",
    },
    {
      id: 2,
      userName: "User 2",
      age: 30,
      institute: "XYZ Institute",
      isActive: false,
      category: "Category B",
    },
  ];

  return (
    <div>
      <Input onChange={(e) => setInputValue(e.target.value)} type="text" />
      <p>{inputValue}</p>;
      {/* <Button label="Click Me" onClick={() => console.log("Button clicked")} /> */}
      <Select
        label="Select an option"
        value="option1"
        onChange={(e) => console.log(e.target.value)}
        optionsList={optionsList}
      />
      <Table data={data} />
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          userName={item.userName}
          age={item.age}
          institute={item.institute}
          isActive={item.isActive}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default App;
