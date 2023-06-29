import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { userAuthActions } from "../Store/UserAuthSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const isUserLoggedIn = useSelector((state) => state.userAuth.isUserLoggedIn);
  const dispatchFunction = useDispatch();
  const logOutHandler = (event) => dispatchFunction(userAuthActions.signOut());
  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          {isUserLoggedIn && (
            <li>
              <a href="/">Мои продажи</a>
            </li>
          )}
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            {isUserLoggedIn && <button onClick={logOutHandler}>Выйти</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
