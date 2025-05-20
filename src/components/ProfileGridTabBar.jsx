import React, { useState } from 'react';
import styled from 'styled-components';
import useToggleImg from '../hooks/useToogleImg';

import grid from '../assets/icons/grid.png';
import grid_active from '../assets/icons/grid_active.png';
import reels from '../assets/icons/reels.png';
import reels_active from '../assets/icons/reels_active.png';
import mentions from '../assets/icons/mentions.png';
import mentions_active from '../assets/icons/mentions_active.png';



const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const TabItem = styled.button`
  background: none;
  border: none;
  padding: 20px 0 2px 0;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
    transition: opacity 0.2s ease;
  }
`;

const ProfileGridTabBar = () => {
const [activeTab, setActiveTab] = useState('grid');

  return (
    <TabBar>
      <TabItem onClick={() => setActiveTab('grid')}>
        <img
          src={activeTab === 'grid' ? grid_active : grid}
          alt="Grid Icon"
        />
      </TabItem>
      <TabItem onClick={() => setActiveTab('reels')}>
        <img
          src={activeTab === 'reels' ? reels_active : reels}
          alt="reels Icon"
        />
      </TabItem>
      <TabItem onClick={() => setActiveTab('mentions')}>
        <img
          src={activeTab === 'mentions' ? mentions_active : mentions}
          alt="mentions Icon"
        />
      </TabItem>
    </TabBar>
  );
};

export default ProfileGridTabBar;
