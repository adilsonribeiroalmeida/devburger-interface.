import styled from "styled-components";

import Background from "../../assets/banner-home.svg";
import BackgroundHome from "../../assets/background.svg";

// BANNER DA HOME
export const Banner = styled.div`
  background-image: url("${Background}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 480px;
  position: relative;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    color: #f4f4f4;

    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

// CONTAINER PRINCIPAL
export const Container = styled.section`
  background:
    linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("${BackgroundHome}");

  background-size: cover;
  background-position: center;
  background-repeat: repeat;

  min-height: 500px;
`;

// CONTEÚDO DA HOME
export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  padding: 20px 20px 70px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;