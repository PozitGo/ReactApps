import "./UserItem.css";
import Card from "../UI/Card";
const UserItem = (props) => {
  return (
    <Card className="contain-item">
      <p>{"Имя: " + props.Name}</p>
      <p>{"Возраст: " + props.Age}</p>
    </Card>
  );
};

export default UserItem;
