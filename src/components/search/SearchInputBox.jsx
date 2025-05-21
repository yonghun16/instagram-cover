import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import searchIcon from '../../assets/icons/input_search.png';
import closeIcon from '../../assets/icons/input_close.png';

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
  background: #ECECEC;
  margin: 4px 10px;
  padding: 4px 0;;
  padding-left: ${(props) => props.$isFocused || props.$hasText ? '10px' : '30px'};
  padding-right: 10px;
  display: flex;

  font-size: 16px;
  font-weight: 300;

  border: none;
  border-radius: 9px;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 20px;
  width: 18px;
  height: 18px;
  pointer-events: none;
`;

export const ClearButton = styled.img`
  width: 18px;
  position: absolute;
  right: 20px;
  padding: 2px;
  cursor: pointer;
`;


const SearchInputBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleClear = () => {
    setInputValue('');          // 입력창 비우기
    inputRef.current?.blur();   // focus 해제
  };

  return (
    <SearchWrapper>
      {!isFocused && inputValue === '' && (
        <SearchIcon src={searchIcon} />
      )}
      <SearchInput
        ref={inputRef}
        placeholder="검색"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        $isFocused={isFocused}
        $hasText={inputValue.length > 0}
      />
      {isFocused && (
        <ClearButton onMouseDown={handleClear} src={closeIcon} />
      )}
    </SearchWrapper>
  );
};

export default SearchInputBox;
