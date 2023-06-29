import "./UserList.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <section className="wrappUsers">
      {props.users.map((user) => (
        <UserItem key={user.id} Name={user.Name} Age={user.Age} />
      ))}
    </section>
  );
};

export default UserList;
