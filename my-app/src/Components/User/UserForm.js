import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [NameUser, setNameUser] = useState("");
  const [AgeUser, setAgeUser] = useState(18);

  const NameChangeHandler = (event) => setNameUser(event.target.value);
  const AgeChandeHandler = (event) => setAgeUser(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const User = {
      Name: NameUser,
      Age: AgeUser,
    };

    props.AddUser(User);
    setNameUser("");
    setAgeUser(18);
  };

  return (
    <form onSubmit={submitHandler} className="InputForm">
      <section>
        <label>Имя</label>
        <input type="text" value={NameUser} onChange={NameChangeHandler} />
      </section>
      <section>
        <label>Возраст</label>
        <input
          type="number"
          min="18"
          max="90"
          step="1"
          value={AgeUser}
          onChange={AgeChandeHandler}
        />
      </section>

      <button type="submit">Добавить пользователя</button>
    </form>
  );
};

export default UserForm;
