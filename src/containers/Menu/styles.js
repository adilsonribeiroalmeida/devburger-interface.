import styled from "styled-components";
import BannerHamburger from "../../assets/BannerHamburger.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 0  40px;
  box-sizing: border-box;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  color: #9758a6;
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  color: #363636;
  font-size: 18px;
  text-align: center;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 690px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 30px auto;
  max-width: 1200px;
`;

export const CategoryButton = styled.button`
  background-color: ${({ $active }) =>
          $active ? "#9758a6" : "#ffffff"};

  color: ${({ $active }) =>
          $active ? "#ffffff" : "#9758a6"};

  border: 2px solid #9758a6;
  border-radius: 25px;
  padding: 12px 24px;

  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #9758a6;
    color: #ffffff;
    transform: translateY(-2px);
  }

  @media (max-width: 690px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;
export const Banner = styled.div`
  width: 100%;
  aspect-ratio: 1440 / 415;
  height: auto;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 12%;

  background-image: url("${BannerHamburger}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  h1 {
    color: #ffffff;
  font-size: 38px;
  font-weight: 800;
  line-height: 1.1;
  text-align: center;
  margin: 0;
  }

  span {
    color: white;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 0 5%;

    h1 {
      font-size: 26px;
    }

    span {
      font-size: 12px;
    }
  }
`;