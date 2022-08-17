import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const ProductContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  > a {
    margin-top: 50px;
    margin-bottom: 100px;

    @media (max-width: 1150px) {
      margin-bottom: 50px;
    }
  }
`;

export const ProductContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  div {
    flex: 1;

    h1 {
      font-size: 45px;
      background: ${(props) => props.theme.secondary};
      padding: 30px;
      border-radius: 10px;
    }

    p {
      font-size: 20px;
      line-height: 170%;
      margin-top: 20px;
      margin-bottom: 60px;
    }

    h2 {
      font-size: 45px;
      text-align: center;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;

      span {
        font-size: 25px;
        font-weight: 500;
      }
    }

    button {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      padding: 20px;
      width: 100%;
      text-align: center;
      border: 2px solid ${(props) => props.theme.primary};
      transition: 0.4s;
      border-radius: 5px;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 700;

      &:hover {
        background: none;
        color: ${(props) => props.theme.primary};
        border-color: ${(props) => props.theme.primary};
      }
    }
  }

  img {
    width: 500px;
    object-fit: contain;
    background: ${(props) => props.theme.white};
    height: 500px;
    border: 15px double ${(props) => props.theme.primary};
  }

  @media (max-width: 1150px) {
    gap: 50px;

    div {
      h1 {
        font-size: 30px;
        padding: 15px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column-reverse;

    img {
      height: 300px;
      width: 100%;
    }
  }
`;
