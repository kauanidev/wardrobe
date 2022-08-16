import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${(props) => props.theme.secondary};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px -4px rgba(147, 80, 66, 0.6);

  img {
    width: 100%;
    object-fit: contain;
    transition: 1s;
    height: 100%;
    background: ${(props) => props.theme.white};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    flex: 1;
    text-align: center;
    font-weight: 600;
  }

  div {
    overflow: hidden;
    height: 300px;
    border-radius: 10px;
  }

  a {
    background: ${(props) => props.theme.primaryLighter};
    color: ${(props) => props.theme.white};
    padding: 5px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.primaryLighter};
    transition: 0.4s;
    border-radius: 5px;
    font-size: 14px;
    margin-top: auto;

    &:hover {
      background: none;
      color: ${(props) => props.theme.primary};
      border-color: ${(props) => props.theme.primary};
    }
  }

  &:hover img {
    transform: scale(1.2);
  }
`;
