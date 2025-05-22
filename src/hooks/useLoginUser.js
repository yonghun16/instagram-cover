import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/login/loginUserSlice';

function useLoginUser() {
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = {
      name: 'Ruffles',
    };
    dispatch(login(userData));
  }, []);

  return loginUser;
}

export default useLoginUser;
