import React from 'react';
import styled from 'styled-components';
import WifiIcon from '../assets/icons/status/Wifi.png';
import SignalIcon from '../assets/icons/status/Signal.png';
import BatteryIcon from '../assets/icons/status/Battery.png';

const StatusBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  background: white;
  font-family: sans-serif;
  font-size: 16px;
  height: 30px;
`;

const Time = styled.div`
  font-weight: 600;
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
  return (
    <StatusBarWrapper>
      <Time>9:41</Time>
      <Icons>
        <IconImg src={SignalIcon} alt="Signal" />
        <IconImg src={WifiIcon} alt="WiFi" />
        <IconImg src={BatteryIcon} alt="Battery" />
      </Icons>
    </StatusBarWrapper>
  );
};

export default StatusBar;
