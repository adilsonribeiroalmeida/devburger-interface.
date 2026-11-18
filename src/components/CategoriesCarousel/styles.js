import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 15px 0;

  .carousel-item {
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #9758a6;
  text-align: center;
  margin-bottom: 16px;
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

export const ContainerItems = styled.div`
  position: relative;
  width: 100%;
  height: 125px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: 3px solid #9758a6;
    outline-offset: 3px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  p {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);

  width: max-content;
  max-width: calc(100% - 30px);
  margin: 0;
  padding: 6px 10px;

  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-align: left;

  background: rgba(0, 0, 0, 0.65);
  border-radius: 4px;
  box-sizing: border-box;
}
`;