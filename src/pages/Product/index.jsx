import { ProductContainer, ProductContentContainer } from "./styles";
import logo from "../../assets/logo2.svg";
import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

export function Product() {
  const [product, setProduct] = useState({});

  const params = useParams();

  async function getProduct() {
    const response = await api.get(`/products/${params.id}`);
    setProduct(response.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContainer>
      <Link to="/">
        <img src={logo} />
      </Link>
      {product?.id && (
        <ProductContentContainer>
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2>
              <span>$</span>
              {product.price}
            </h2>
            <button>Buy now</button>
          </div>
          <img src={product.image} />
        </ProductContentContainer>
      )}
    </ProductContainer>
  );
}
