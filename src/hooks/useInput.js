import { useState, useRef } from 'react';

export default function useInput(initialValue = '', maxLength = 15) {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const bannedWords = ['섹스', '야스', '씨발', '개새끼']; // 금칙어 목록
  const eventWords = ['민지'];

  const onChange = (e) => {
    const nextValue = e.target.value;

    // 금칙어 검사
    const containsBanned = bannedWords.some(word => nextValue.includes(word));
    const containsEvent= eventWords.some(word => nextValue.includes(word));
    if (containsBanned) {
      alert('풍속에 어긋나는 단어는 입력할 수 없습니다.');
      return;
    } else if (containsEvent) {
      alert('민지 대리님 좋아해요♥️\n민지 대리님이랑 사귀어도 된다고 엄마한테 허락도 맛았어요!\n오늘 부터 1일 해요!.');
      return;
    }

    if (nextValue.length <= maxLength) {
      setValue(nextValue);
    }
  };

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

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
