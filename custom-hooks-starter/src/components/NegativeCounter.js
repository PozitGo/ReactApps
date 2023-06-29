import useCounter from "../Hooks/use-counter";
import Card from "./Card";

const NegativeCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default NegativeCounter;
