/* import libraries */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


/* styled components */
const RedirectWrapper = styled.div`
  max-width: 400px;
  height: 100vh;
  margin: 0 auto;

  background: white;
  background-image: ${ ({ $backImg }) => `url(${$backImg})` };
  background-repeat: repeat;
  background-size: auto;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Infomation = styled.div`
  font-size: 22px;
  text-shadow: 1px 1px 10px white;
  margin-bottom: 20px;
`;


function Redirect({ page, backImg }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  // 5초 카운트를 세고
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);    // clean up
  }, []);

  // 0초가 되면 홈으로 이동
  useEffect(() => {
    if (count === 0) {
      navigate('/');
    }
  }, [count, navigate]);

  return (
    <RedirectWrapper $backImg={backImg}>
      <InfoWrapper>
        <Infomation>
          <strong>{page}page</strong>는 현재 개편중 입니다.
        </Infomation>
        <div>
          {count}초 후에 홈으로 이동합니다...
        </div>
      </InfoWrapper>
    </RedirectWrapper>
  );
}

export default Redirect;
