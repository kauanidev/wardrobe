import { CategoryBannerContainer } from "./styles";
import { useParams, useNavigate } from "react-router-dom";

export function CategoryBanner() {
  const params = useParams();
  const category = params.slug.split(" ")[0].replace("'", "");
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <CategoryBannerContainer category={category}>
      <div>
        <button onClick={handleGoBack}>{"<<"}</button>
        <h1>{params.slug}</h1>
      </div>
    </CategoryBannerContainer>
  );
}
