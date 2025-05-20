import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WifiIcon from '../assets/icons/status/Wifi.png';
import SignalIcon from '../assets/icons/status/Signal.png';
import BatteryIcon from '../assets/icons/status/battery.png';

const StatusBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const StatusContainer = styled.div`
  width: 400px;
  height: 30px;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 18px;
  font-family: sans-serif;
  align-items: center;
`;

const Time = styled.div`
  padding-left: 10px;
  font-weight: 400;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const IconImg = styled.img`
  height: 13px;
`;

const StatusBar = () => {
  const [time, setTime] = useState(getCurrentTime());

  // 현재 시각 구하기(hh:mm)
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000 * 10);  // 10초마다 update

    return () => clearInterval(interval);  // cleanup
  }, []);


  return (
    <StatusBarWrapper>
      <StatusContainer>
        <Time>{time}</Time>
        <Icons>
          <IconImg src={SignalIcon} alt="Signal" />
          <IconImg src={WifiIcon} alt="WiFi" />
          <IconImg src={BatteryIcon} alt="Battery" />
        </Icons>
      </StatusContainer>
    </StatusBarWrapper>
  );
};

export default StatusBar;
