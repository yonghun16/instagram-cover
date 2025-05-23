import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/login/loginUserSlice';
import userData from '../assets/data/userData';

function useLoginUser() {
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginAction = {
      name: userData[0].name,
      image: userData[0].image,
    };
    dispatch(login(loginAction));
  }, []);

  return loginUser;
}

export default useLoginUser;
