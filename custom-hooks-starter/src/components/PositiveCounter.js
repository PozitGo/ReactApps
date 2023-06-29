import useCounter from "../Hooks/use-counter";
import Card from "./Card";

const PositiveCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default PositiveCounter;
