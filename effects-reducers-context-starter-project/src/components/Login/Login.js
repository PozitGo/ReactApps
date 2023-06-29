import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import AuthContext from "../../Context/Auth-Context";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const EmailReducer = (prevState, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.value,
        isValid: action.value.includes("@"),
      };
    case "INPUT_BLUR":
      return {
        value: prevState.value,
        isValid: prevState.value.includes("@"),
      };
    default:
      return {
        value: "",
        isValid: false,
      };
  }
};

const PasswordReducer = (prevState, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.value,
        isValid: action.value.trim().length > 7,
      };
    case "INPUT_BLUR":
      return {
        value: prevState.value,
        isValid: prevState.value.trim().length > 7,
      };
    default:
      return {
        value: "",
        isValid: false,
      };
  }
};

const Login = (props) => {
  const ctx = useContext(AuthContext);

  const [EmailState, dispatchEmailState] = useReducer(EmailReducer, {
    value: "",
    isValid: undefined,
  });

  const [PasswordState, dispatchPasswordState] = useReducer(PasswordReducer, {
    value: "",
    isValid: undefined,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: EmailIsValid } = EmailState;
  const { isValid: PasswordIsValid } = PasswordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const Timer = setTimeout(() => {
      setFormIsValid(EmailIsValid && PasswordIsValid);
    }, 3000);

    return () => {
      clearTimeout(Timer);
    };
  }, [EmailIsValid, PasswordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", value: event.target.value });
    // setFormIsValid(EmailState.isValid && PasswordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "USER_INPUT", value: event.target.value });
    // setFormIsValid(EmailState.isValid && PasswordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctx.onLogin(EmailState.value, PasswordState.value);
    } else if (!EmailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="Email"
          type="email"
          isValid={EmailIsValid}
          value={EmailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={PasswordIsValid}
          value={PasswordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
