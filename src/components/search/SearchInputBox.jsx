import React, { useState, useRef } from 'react';
import styled from 'styled-components';

/* Styled Components */
export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid #DBDBDB;
  border-bottom: 1px solid #DBDBDB;
  border-left: none;
  border-right: none;
  background: #F5F5F5;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 4px 10px;
  margin: 4px 10px;
  background: #ECECEC;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  border-radius: 9px;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  left: 10px;
  width: 18px;
  height: 18px;
  fill: #aaa;
  pointer-events: none;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  font-size: 18px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;


const SearchInputBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleClear = () => {
    setInputValue('');
    inputRef.current?.blur();
  };

  return (
    <SearchWrapper>
      {!isFocused && inputValue === '' && (
        <SearchIcon viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 105.29 14.29l4.7 4.7 1.41-1.41-4.7-4.7A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
        </SearchIcon>
      )}
      <SearchInput
        ref={inputRef}
        placeholder="검색"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <ClearButton onMouseDown={handleClear}>×</ClearButton>
      )}
    </SearchWrapper>
  );
};

export default SearchInputBox;
