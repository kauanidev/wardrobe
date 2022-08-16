import { Link } from "react-router-dom";
import { ProductContainer } from "./styles";

export function Product({ product }) {
  return (
    <ProductContainer>
      <div>
        <img src={product.image} />
      </div>
      <p>{product.title}</p>
      <Link to={`/product/${product.id}`}>See more</Link>
    </ProductContainer>
  );
}
