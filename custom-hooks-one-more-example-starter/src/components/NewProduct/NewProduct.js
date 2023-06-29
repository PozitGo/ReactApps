import useHttp from "../../Hooks/use-http";
import Section from "../UI/Section";
import ProductForm from "./ProductForm";

const NewProduct = (props) => {
  const { isLoading, error, sendHttpRequest: sendProduct } = useHttp();

  const enterProductHandler = async (productText) => {
    const createProduct = (productData) => {
      const generatedId = productData.name;
      const createdProduct = { id: generatedId, text: productText };

      props.onAddProduct(createdProduct);
    };

    sendProduct(
      {
        endpoint:
          "https://customhooks-8c8e6-default-rtdb.firebaseio.com/products.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: productText },
      },
      createProduct
    );
  };

  return (
    <Section>
      <ProductForm onEnterProduct={enterProductHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewProduct;
