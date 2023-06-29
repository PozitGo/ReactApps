import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/CounterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counter);
  const isCounterInvisible = useSelector(
    (state) => state.counter.isCounterInvisible
  );

  const incrementHandler = (Count = 1) =>
    dispatch(counterActions.increment(Count));

  const decrementHandler = (Count = 1) =>
    dispatch(counterActions.decrement(Count));

  const toggleCounterHandler = () => {
    dispatch(counterActions.setCounterVisibility());
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {!isCounterInvisible && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={() => incrementHandler()}>+</button>
        <button onClick={() => incrementHandler(10)}>+10</button>
        <button onClick={() => decrementHandler(10)}>-10</button>
        <button onClick={() => decrementHandler()}>-</button>
      </div>
      <button onClick={() => toggleCounterHandler()}>
        Спрятать / Показать
      </button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler = () => this.props.increment();
//   decrementHandler = () => this.props.decrement();
//   toggleCounterHandler = () => {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Счётчик</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Спрятать / Показать</button>
//       </main>
//     );
//   }
// }

// const mapToStateProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapToStateProps, mapDispatchToProps)(Counter);
