import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.primary};
  background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png");
  padding: 50px 0;
  color: ${(props) => props.theme.white};
  gap: 80px;
  margin-bottom: 100px;

  > img {
    width: 150px;
  }
`;

export const HeroContent = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;

  a,
  button {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.primary};
    padding: 10px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.white};
    transition: 0.4s;
    border-radius: 5px;

    &:hover {
      background: none;
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.white};
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 450px;

  h1 {
    font-size: 60px;
    line-height: 90%;
  }
`;

export const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  grid-auto-rows: 258px;
  width: 100%;
  max-width: 607px;
  height: 550px;
  gap: 5px;
`;

export const FeaturedItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    padding: 30px;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(147, 80, 66, 0) 25%,
      ${(props) => props.theme.primaryLighter} 90%
    );
    opacity: 0;
    transition: 1s;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 1s;
    background: ${(props) => props.theme.white};
  }

  &:nth-of-type(2) {
    grid-row: 1 / 3;
    grid-column: 2;
  }

  &:hover {
    div {
      opacity: 1;
    }

    img {
      transform: scale(1.2);
    }
  }
`;
