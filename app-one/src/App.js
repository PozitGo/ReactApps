import React, { useState } from "react";
import NewCost from "./Components/NewCost/NewCost";
import Costs from "./Components/Costs/Costs";

const InitialCosts = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2023, 1, 25),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2021, 3, 1),
    description: "Джинсы",
    amount: 9.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(InitialCosts);

  const AddCostHandler = (Cost) => {
    setCosts((prevCosts) => {
      return [Cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={AddCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
