import styled from "styled-components";
import { lg } from "../breakpoints";

export const Title = styled.h1`
  font-family: "mulish-bold";
  font-size: 36px;
  margin-bottom: 36px;
  text-align: center;

  ${lg} {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;

  ${lg} {
    margin-top: 15px;
  }

  p {
    text-align: center;
    font-size: 14px;
    font-family: "mulish-light" !important;
    margin-top: 12px;
  }
`;
