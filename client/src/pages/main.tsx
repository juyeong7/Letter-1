import React, { useState } from "react";
import styled from "styled-components";
import Headerimg from "../images/header.png";
import { Link } from "react-router-dom";
import Letterverse from "../components/letterverse";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 70vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${Headerimg});
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Template = styled.img`
  width: 200px;
  height: 300px;
  line-height: 20px;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;
const Plusimg1 = styled.img`
  width: 40px;
  height: 40px;
`;
const Templatebox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 80px;
  justify-content: space-around;
`;
const TpTitle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  display: flex;
  color: #090909;
  background-color: #f6ecda;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 70px;
  color: #ab8643;
  background-color: #f6ecda;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: #d3b47b;
`;
const MoreBtn = styled.button`
  border: 1px solid #ab8643;
  width: 50px;
  height: 50px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: -15px;
  cursor: pointer;
  font-size: 30px;
  font-weight: bolder;
  border-radius: 30px;
  background-color: white;
  &:hover {
    box-shadow: -1px 1px 1px 1px gray;
  }
`;

function Main() {
  const tpTitle: string[] = ["감사인사", "축하", "제안 및 요청", "무제"];
  const [isChecked, setIsChecked] = useState(false); //체크여부
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크요소
  return (
    <>
      <div>
        <HeaderContainer />
        <TextContainer>
          <div>감사인사</div>
        </TextContainer>
        <br />
        <Templatebox>
          <Letterverse />
          <Letterverse />
          <Letterverse />
          <Letterverse />
          <Link to="/thank">
            <MoreBtn>{">"}</MoreBtn>
          </Link>
        </Templatebox>
        <br />
        <TextContainer>
          <div>축하</div>
        </TextContainer>
        <br />
        <Templatebox>
          <Letterverse />
          <Letterverse />
          <Letterverse />
          <Letterverse />
          <Link to="/congratulaion">
            <MoreBtn>{">"}</MoreBtn>
          </Link>
        </Templatebox>
        <br />
        <TextContainer>
          <div>제안 및 요청</div>
        </TextContainer>
        <br />
        <Templatebox>
          <Letterverse />
          <Letterverse />
          <Letterverse />
          <Letterverse />
          <Link to="/request">
            <MoreBtn>{">"}</MoreBtn>
          </Link>
        </Templatebox>
        <br />
        <TextContainer>
          <div>무제</div>
        </TextContainer>
        <br />
        <Templatebox>
          <Letterverse />
        </Templatebox>
      </div>
    </>
  );
}

export default Main;
