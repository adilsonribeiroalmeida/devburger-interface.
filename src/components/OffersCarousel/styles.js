import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 10px 0 15px;
  box-sizing: border-box;

  .react-multi-carousel-list {
    padding: 5px 0;
  }

  .carousel-item {
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #61a120;
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
    background-color: #61a120;
    border-radius: 2px;
  }
`;

export const ContainerItems = styled.div`
  background-image: url("${(props) => props.imageUrl}");
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 200px;
  padding: 20px;
  box-sizing: border-box;

  border-radius: 12px;
  cursor: pointer;

  p {
    color: #ffffff;
    background: rgba(0, 0, 0, 0.6);
    padding: 8px 12px;
    border-radius: 10px;
    font-weight: 600;
  }
`;