import { CategoryBanner } from "../../components/CategoryBanner";
import { ProductsList } from "../../components/ProductsList";
import { api } from "../../lib/axios";
import { CategoryContainer } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Category() {
  const [products, setProducts] = useState([]);

  const params = useParams();

  async function getCategoryProducts() {
    const response = await api.get(`/products/category/${params.slug}`);

    setProducts(response.data);
  }

  useEffect(() => {
    getCategoryProducts();
  }, [params]);

  return (
    <CategoryContainer>
      <CategoryBanner />
      <ProductsList products={products} />
    </CategoryContainer>
  );
}
