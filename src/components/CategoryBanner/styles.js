import styled from "styled-components";

export const CategoryBannerContainer = styled.section`
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  background: url(${(props) => `/${props.category}.jpg`}) no-repeat center;
  background-size: cover;
  margin-bottom: 80px;

  div {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    padding: 10px 20px;
    border-radius: 0 5px 5px 0;
    display: flex;
  }

  button {
    margin-right: 80px;
    background: none;
    border: none;
    color: ${(props) => props.theme.white};
    font-size: 40px;
    font-weight: 700;
  }

  h1 {
    font-size: 45px;
    text-transform: uppercase;
  }

  @media (max-width: 620px) {
    h1 {
      font-size: 35px;
    }

    button {
      margin-right: 20px;
      font-size: 30px;
    }
  }

  @media (max-width: 450px) {
    margin-bottom: 40px;

    h1 {
      font-size: 25px;
    }

    button {
      margin-right: 15px;
      font-size: 20px;
    }

    div {
      padding: 10px 15px;
    }
  }
`;
