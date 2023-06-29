import { useEffect, useState } from "react";
import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MealList = () => {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [HTTPErrorMessage, setHTTPErrorMessage] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://sitedilivery-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Что-то пошло не так");
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHTTPErrorMessage(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Извлечение данных с сервера...</p>
      </section>
    );
  }

  if (HTTPErrorMessage) {
    return (
      <section className={styles.error}>
        <p>{HTTPErrorMessage}</p>
      </section>
    );
  }

  const mealList = Meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>{!isLoading && mealList.length > 0 && <ul>{mealList}</ul>}</Card>
    </section>
  );
};

export default MealList;
