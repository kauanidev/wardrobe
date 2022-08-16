import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const ProductsListContainer = styled(BaseContainer)`
  h3 {
    font-size: 45px;
    margin-bottom: 30px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 20px;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 10px;

  a {
    background: ${(props) => props.theme.primaryLighter};
    color: ${(props) => props.theme.white};
    padding: 3px 6px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.primaryLighter};
    transition: 0.4s;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;

    &:hover {
      background: none;
      color: ${(props) => props.theme.primary};
      border-color: ${(props) => props.theme.primary};
    }
  }
`;
