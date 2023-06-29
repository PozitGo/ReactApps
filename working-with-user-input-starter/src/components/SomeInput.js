import useInput from "../Hooks/use-input";

const SomeInput = (props) => {
  const {
    value: enteredName,
    hasError: HasNameInputError,
    isValid: isEnteredNameValid,
    InputChangeHandler: nameInputChangeHandler,
    InputLoctFocusHandler: nameInputLoctFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredEmail,
    hasError: HasEmailInputError,
    isValid: isEnteredEmailValid,
    InputChangeHandler: emailInputChangeHandler,
    InputLoctFocusHandler: emailInputLoctFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput((val) => val.includes("@"));

  const nameInputClasses = !HasNameInputError
    ? "form-control"
    : "form-control invalid";

  const EmailInputClasses = !HasEmailInputError
    ? "form-control"
    : "form-control invalid";

  let isFormValid = false;
  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isEnteredNameValid && !isEnteredEmailValid) {
      return;
    }

    resetNameInputValues();
    resetEmailInputValues();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите имя</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLoctFocusHandler}
          value={enteredName}
        />
        {HasNameInputError && <p className="error-text">Вы не ввели имя</p>}
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="email">Введите почту</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLoctFocusHandler}
          value={enteredEmail}
        />
        {HasEmailInputError && <p className="error-text">Вы не ввели почту</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
