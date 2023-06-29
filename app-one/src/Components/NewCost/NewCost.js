import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";
const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const InputCostDataHandler = () => setIsFormVisible(true);
  const CancelCostHandler = () => setIsFormVisible(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={InputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={CancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
