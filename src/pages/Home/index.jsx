import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import { ProductsList } from "../../components/ProductsList";
import { api } from "../../lib/axios";
import { HomeContainer } from "./styles";

export function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await api.get("/products/category/women's clothing", {
      params: {
        limit: 11,
      },
    });
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const highlights = products.slice(0, 3);

  const featured = products.slice(3, products.length);

  return (
    <HomeContainer>
      <Hero highlights={highlights} />
      <ProductsList title="Featured" products={featured} />
    </HomeContainer>
  );
}
