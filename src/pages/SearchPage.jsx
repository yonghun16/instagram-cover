import React from 'react';
import styled from 'styled-components';
import SearchInputBox from '../components/search/SearchInputBox';

// 스타일 정의
const Container = styled.div`
  height: 100vh;
  max-width: 400px;
  background: white;
  margin: 0 auto;
`;

const SearchBar = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  padding: 10px 0;
  z-index: 1;
`;

const SearchPage = () => {
  return (
    <Container>
      <SearchBar>
        <SearchInputBox />
      </SearchBar>
      {/* 여기에 이미지 Grid 등 추가 */}
    </Container>
  );
};

export default SearchPage;

