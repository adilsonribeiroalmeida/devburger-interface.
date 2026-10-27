import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-width: 0;
  padding: 10px 0 15px;
  box-sizing: border-box;

  .react-multi-carousel-list {
    padding: 15px 0;
    overflow: hidden;
  }

  .product-carousel-item {
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h2`
  color: #9758a6;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin: 0 0 15px;
  padding-bottom: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #9758a6;
    border-radius: 2px;
  }
`;