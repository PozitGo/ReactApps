import "./Costs.css";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";
const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const onChangeYearHandler = (Year) => {
    setSelectedYear(Year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler} />
      <CostsDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  );
};

export default Costs;
