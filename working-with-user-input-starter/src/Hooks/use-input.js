import { useReducer } from "react";

const initialInputState = {
  inputValue: "",
  wasTouched: false,
};

const inputStateReducer = (prevState, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        inputValue: action.value,
        wasTouched: prevState.wasTouched,
      };
    case "INPUT_BLUR":
      return {
        inputValue: prevState.inputValue,
        wasTouched: true,
      };
    case "RESET_INPUT":
      return {
        inputValue: "",
        wasTouched: false,
      };
    default:
      return prevState;
  }
};
const useInput = (validateValueFunc) => {
  const [inputState, dispatchAction] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValueValid = validateValueFunc(inputState.inputValue);
  const isInputInvalid = !isValueValid && inputState.wasTouched;

  const InputChangeHandler = (event) =>
    dispatchAction({ type: "INPUT", value: event.target.value });
  const InputLoctFocusHandler = () => dispatchAction({ type: "INPUT_BLUR" });

  const resetValues = () => dispatchAction({ type: "RESET_INPUT" });

  return {
    value: inputState.inputValue,
    hasError: isInputInvalid,
    isValid: isValueValid,
    InputChangeHandler,
    InputLoctFocusHandler,
    resetValues,
  };
};

export default useInput;
