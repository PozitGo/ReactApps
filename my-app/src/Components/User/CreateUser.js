import "./CreateUser.css";
import UserForm from "./UserForm";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import React, { useState } from "react";
const CreateUser = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  const CloseShowModalHandler = () => {
    setShowModal(false);
  };

  const AddUserHandler = (InputUser) => {
    const User = {
      ...InputUser,
      id: Math.random().toString(),
    };

    if (User.Name === "") {
      setShowModal(true);
      setErrorMessage("Имя не может быть пустым");
    } else {
      props.onAddUser(User);
    }
  };

  return (
    <Card className='background-form'>
      <UserForm AddUser={AddUserHandler} />
      {showModal && (
        <ErrorModal
          title="Ошибка создания пользователя"
          text={ErrorMessage}
          onClick={CloseShowModalHandler}
        />
      )}
    </Card>
  );
};

export default CreateUser;
