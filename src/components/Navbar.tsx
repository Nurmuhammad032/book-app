import React from "react";
import styled from "styled-components";
import { IconLogo } from "./icons";
import { Avatar, Stack } from "@mui/material";
import Search from "./Search";
import { lg } from "../breakpoints";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header>
      <div className="container">
        <Wrapper>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <LogoWrapper to={"/"}>
              <IconLogo />
              <LogoText>
                Books <span>List</span>
              </LogoText>
            </LogoWrapper>
            <SearchWrapper>
              <Search />
            </SearchWrapper>
          </Stack>
          <div>
            <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30 }} />
          </div>
        </Wrapper>
        <PhoneSearch>
          <Search />
        </PhoneSearch>
      </div>
    </Header>
  );
};

const Header = styled.header`
  padding: 12px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0 20px;
  color: #ffffff;
  ${lg} {
    color: var(--primary-color);
  }
`;

const LogoText = styled.h4`
  color: var(--primary-blue);
  font-family: "mulish-bold", sans-serif;
  font-size: 18px;
  span {
    color: #fff;
  }
`;

const SearchWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  display: block;
  ${lg} {
    display: none;
  }
`;

const PhoneSearch = styled.div`
  margin-top: 1rem;
  display: none;
  ${lg} {
    display: block;
  }
`;

export default Navbar;
