// import libraries
import styled from 'styled-components';

// import icons
import searchIcon from '../../assets/icons/input_search.png';
import closeIcon from '../../assets/icons/input_close.png';
import useInput from '../../hooks/useInput';


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
  const { value, isFocused, bind, clear } = useInput('', 15);  // 15자 제한, bind{ value, onChange, onFocus, onBlur, ref }

  return (
    <SearchWrapper>
      {/* 돋보기 아이콘*/}
      {!isFocused && value === '' && (
        <SearchIcon src={searchIcon} alt="search" />
      )}

      <SearchInput
        {...bind}
        placeholder="검색"
        $isFocused={isFocused}
        $hasText={value.length > 0}
      />

      {/* 포커즈 된 상태에서 X버튼 누르면 Input텍스트 삭제 및 cblur(on) */}
      {isFocused && (<ClearButton onMouseDown={clear} src={closeIcon} alt="clear"/>)}
    </SearchWrapper>
  );
};

export default SearchInputBox;
