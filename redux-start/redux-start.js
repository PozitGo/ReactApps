const redux = require("redux");
const counterReducer = (prevState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: prevState.counter + 1,
      };
    case "decrement":
      return {
        counter: prevState.counter - 1,
      };
    default:
      return {
        counter: 0,
      };
  }
};
const Store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {
  const newState = Store.getState();
  console.log(newState);
};

Store.subscribe(counterSubscriber);
Store.dispatch({ type: "increment" });
Store.dispatch({ type: "decrement" });
