/* import libraries */
import { useState, useRef } from 'react';


export default function useInput(initialValue = '', maxLength = 15) {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // 금칙어 목록
  const bannedWords = ['원정숙', '미친', '씨발', '개새끼', '똘아이', '경계성지능장애자', '싸이코패스'];
  const eventWords = ['민지'];

  // 입력창에서 글자가 써질 때마다 발생하는 이벤트
  const onChange = (e) => {
    const nextValue = e.target.value;

    // 금칙어 검사
    const containsBanned = bannedWords.some(word => nextValue.includes(word));
    const containsEvent= eventWords.some(word => nextValue.includes(word));
    if (containsBanned) {
      alert(`"${nextValue}"과 같은 욕설은 제한되어 있습니다. 다른 표현을 사용해 주세요.`);
      setValue('');
      return;
    } else if (containsEvent) {
      alert('민지 대리님 좋아해요♥️\n민지 대리님이랑 사귀어도 된다고 엄마한테 허락도 맛았어요!\n내일부터 우리 같이 \'Re:제로\' 정주행 해요!');
      setValue('민지 사랑해!');  // 다연발 정신공격 2타
      return;
    }

    // maxLength 이하일 때만 글자 써지도록
    if (nextValue.length <= maxLength) {
      setValue(nextValue);
    }
  };

  const onFocus = () => setIsFocused(true);  // 글자가 써지는 상태이면 Focuse는 true
  const onBlur = () => setIsFocused(false);  // 글자가 써지 않는 상태이면 Blur는 false

  // 입력창 정화
  const clear = () => {
    setValue('');
    inputRef.current?.blur();
  };

  return {
    value,
    isFocused,
    inputRef,
    bind: {
      value,            // value={value}
      onChange,         // onChange={onChange}
      onFocus,          // onFocus={onFocus}
      onBlur,           // onBlur={onBlur}
      ref: inputRef,    // ref={inputRef}
    },
    clear,
  };
}
