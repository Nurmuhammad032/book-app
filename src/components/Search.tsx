import styled from "styled-components";
import { IconSearch, IconX } from "./icons";
import { useState } from "react";

const Search = () => {
  return (
    <SearchWrapper>
      <SearchIcon className="search">
        <IconSearch />
      </SearchIcon>
      <Input placeholder="Search for any training you want" />
      <CloseIcon className="close">
        <IconX />
      </CloseIcon>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div<{ isFocus?: boolean }>`
  position: relative;
  width: 100%;

  // This is not working well, because background color doesn't match the input items' color
  /* input {
    background-color: ${({ isFocus }) =>
    isFocus ? "var(--light-white)" : "transparent"};

    &::placeholder {
      color: ${({ isFocus }) =>
    isFocus ? "var(--light-dark)" : "var(--light-white)"};
    }
  }
  span.search {
    color: ${({ isFocus }) => (isFocus ? "var(--dark)" : "var(--light-white)")};
  }
  span.close {
    opacity: ${({ isFocus }) => (isFocus ? "1" : "0")};
  } */
`;

const Input = styled.input`
  width: 100%;
  padding: 13.5px 58px;
  border-radius: 6px;
  transition: all 0.3s;
  font-size: 1rem;
  color: var(--dark);
  box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);

  &::placeholder {
    opacity: 0.64;
    font-size: 16px;
  }
  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`;

const BaseIcon = styled.span`
  position: absolute;
  top: 50%;
  color: var(--dark);
  transition: all 0.3s;
  transform: translateY(-50%);
`;

const SearchIcon = styled(BaseIcon)`
  left: 26px;
`;

const CloseIcon = styled(BaseIcon)`
  right: 26px;
`;

export default Search;
