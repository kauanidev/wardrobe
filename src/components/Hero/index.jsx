import {
  FeaturedContainer,
  FeaturedItem,
  HeroContainer,
  HeroContent,
  TextContainer,
} from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Hero({ highlights }) {
  function handleScroll() {
    window.scroll({
      behavior: "smooth",
      top: document.querySelector("#products").offsetTop,
    });
  }
  return (
    <HeroContainer>
      <img src={logo} alt="A simple wardrobe, all white" />
      <HeroContent>
        <TextContainer>
          <h1>Be free to wear whatever you want</h1>
          <p>
            We are your online wardrobe. Feel free to browse our categories and
            fall in love with each piece we've selected especially for you.
          </p>
          <button onClick={handleScroll}>Shop Now</button>
        </TextContainer>
        <FeaturedContainer>
          {highlights.map((product) => {
            return (
              <FeaturedItem key={product.id}>
                <img src={product.image} />
                <div>
                  <h2>{product.title}</h2>
                  <Link to={`/product/${product.id}`}>See more</Link>
                </div>
              </FeaturedItem>
            );
          })}
        </FeaturedContainer>
      </HeroContent>
    </HeroContainer>
  );
}
