import React, { useState } from "react";
import CreateUser from "./Components/User/CreateUser";
import UserList from "./Components/User/UserList";
import Card from "./Components/UI/Card";
import "./App.css";
const InitialUsets = [
  {
    id: "c1",
    Name: "Andrey",
    Age: 19,
  },
  {
    id: "c2",
    Name: "Dima",
    Age: 18,
  },
];

function App() {
  const [Users, setUser] = useState(InitialUsets);

  const onAddUserHandler = (user) => {
    setUser((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <Card className="wrapper">
      <CreateUser onAddUser={onAddUserHandler} />
      <UserList users={Users} />
    </Card>
  );
}

export default App;
