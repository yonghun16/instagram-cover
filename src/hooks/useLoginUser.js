/* import libraries */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import features, data */
import { login } from '../features/login/loginUserSlice';
import userData from '../assets/data/userData';


function useLoginUser() {
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginAction = {         // 로그인 액션
      name: userData[0].name,     // 로그인을 했다고 하는 user 이름
      image: userData[0].image,   // 로그인을 했다고 하는 user 프로필 이미지
    };
    dispatch(login(loginAction)); // 로그인 액션 객체 dispatch
  }, []);

  return loginUser;
}

export default useLoginUser;
