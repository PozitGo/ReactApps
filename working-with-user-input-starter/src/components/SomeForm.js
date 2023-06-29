import useInput from "../Hooks/use-input";
const SomeForm = (props) => {
  const {
    value: enteredFirstNameValue,
    hasError: isFirstNameInputInvalid,
    isValid: isFirstNameValid,
    InputChangeHandler: FirstNameInputChangeHandler,
    InputLoctFocusHandler: FirstNameInputLoctFocusHandler,
    resetValues: resetFirstNameValues,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredLastNameValue,
    hasError: isLastNameInputInvalid,
    isValid: isLastNameValid,
    InputChangeHandler: LastNameInputChangeHandler,
    InputLoctFocusHandler: LastNameInputLoctFocusHandler,
    resetValues: resetLastNameValues,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredEmailValue,
    hasError: isEmailInputInvalid,
    isValid: isEmailValid,
    InputChangeHandler: EmailInputChangeHandler,
    InputLoctFocusHandler: EmailInputLoctFocusHandler,
    resetValues: resetEmailValues,
  } = useInput((val) => val.includes("@"));

  const FirstNameInputClasses = !isFirstNameInputInvalid
    ? "form-control"
    : "form-control invalid";

  const LastNameInputClasses = !isLastNameInputInvalid
    ? "form-control"
    : "form-control invalid";

  const EmailInputClasses = !isEmailInputInvalid
    ? "form-control"
    : "form-control invalid";

  let isFormValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }

  const SumbitHandler = (event) => {
    event.preventDefault();

    if (!isFirstNameValid && !isLastNameValid && !isEmailValid) {
      return;
    }

    resetFirstNameValues();
    resetLastNameValues();
    resetEmailValues();
  };

  return (
    <form onSubmit={SumbitHandler}>
      <div className="control-group">
        <div className={FirstNameInputClasses}>
          <label htmlFor="first-name">Введите Имя</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstNameValue}
            onChange={FirstNameInputChangeHandler}
            onBlur={FirstNameInputLoctFocusHandler}
          />
          {isFirstNameInputInvalid && (
            <p className="error-text">Вы не ввели Имя</p>
          )}
        </div>
        <div className={LastNameInputClasses}>
          <label htmlFor="last-name">Введите Фамилию</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastNameValue}
            onChange={LastNameInputChangeHandler}
            onBlur={LastNameInputLoctFocusHandler}
          />
          {isLastNameInputInvalid && (
            <p className="error-text">Вы не ввели Фамилию</p>
          )}
        </div>
        <div className={EmailInputClasses}>
          <label htmlFor="email">Введите E-Mail</label>
          <input
            type="text"
            id="email"
            value={enteredEmailValue}
            onChange={EmailInputChangeHandler}
            onBlur={EmailInputLoctFocusHandler}
          />
          {isEmailInputInvalid && (
            <p className="error-text">Вы не ввели почту</p>
          )}
        </div>
        <div className="form-actions">
          <button type="submit" disabled={!isFormValid}>
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};

export default SomeForm;
