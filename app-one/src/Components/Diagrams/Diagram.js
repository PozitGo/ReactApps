import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  const maxMonthCosts = Math.max(
    ...props.dataSets.map((dataSet) => dataSet.value)
  );

  if (maxMonthCosts > 0) {
    return (
      <div className="diagram">
        {props.dataSets.map((dataSet) => (
          <DiagramBar
            key={dataSet.label}
            value={dataSet.value}
            maxValue={maxMonthCosts}
            label={dataSet.label}
          />
        ))}
      </div>
    );
  } else {
    return;
  }
};

export default Diagram;
