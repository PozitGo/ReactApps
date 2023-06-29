import React, { useEffect, useState } from "react";
import useHttp from "./Hooks/use-http";
import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/NewProduct";

function App() {
  const [products, setProducts] = useState([]);

  const httpRequestData = useHttp();

  const { isLoading, error, sendHttpRequest: fetchProducts } = httpRequestData;

  useEffect(() => {
    const ManageProducts = (productsData) => {
      const loadedProducts = [];

      for (const productKey in productsData) {
        loadedProducts.push({
          id: productKey,
          text: productsData[productKey].text,
        });
      }

      console.log(loadedProducts);
      setProducts(loadedProducts);
    };

    fetchProducts(
      "https://customhooks-8c8e6-default-rtdb.firebaseio.com/products.json",
      ManageProducts
    );
  }, [fetchProducts]);

  const productAddHandler = (product) => {
    setProducts((prevProducts) => prevProducts.concat(product));
  };

  return (
    <React.Fragment>
      <NewProduct onAddProduct={productAddHandler} />
      <Products
        items={products}
        loading={isLoading}
        error={error}
        onFetch={fetchProducts}
      />
    </React.Fragment>
  );
}

export default App;
