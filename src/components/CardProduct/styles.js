import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  position: relative;

  width: calc(100% - 12px);
  max-width: 230px;
  min-height: 230px;

  padding: 65px 12px 12px;
  margin: 40px auto 0;

  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  h3 {
    width: 100%;
    min-height: 38px;
    font-size: 15px;
    font-weight: 700;
    color: #ff8c05;
    text-align: left;
    line-height: 19px;
    margin: 0;
  }

  p {
    width: 100%;
    font-size: 18px;
    font-weight: 800;
    color: #363636;
    text-align: left;
    margin: 0;
  }

  button {
    margin-top: auto;
    width: 100%;
  }
`;

export const CardImage = styled.img`
  position: relative;
  top: auto;
  left: auto;
  transform: none;

  width: 175px;
  max-width: 100%;
  height: 115px;
  object-fit: contain;
  display: block;
  flex-shrink: 0;
`;