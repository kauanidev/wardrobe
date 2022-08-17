import { Product } from "../Product";
import { CategoriesContainer, ProductsListContainer } from "./styles";
import { Link } from "react-router-dom";

export function ProductsList({ products, title }) {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <ProductsListContainer id="products">
      <header>
        <h3>{title}</h3>

        <CategoriesContainer>
          {categories.map((category) => {
            return (
              <Link to={`/category/${category}`} key={category}>
                {category}
              </Link>
            );
          })}
        </CategoriesContainer>
      </header>
      <div>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </ProductsListContainer>
  );
}
