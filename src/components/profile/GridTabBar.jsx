/* import libraries */
import React, { useState } from 'react';
import styled from 'styled-components';

/* import icons */
import gridIcon from '../../assets/icons/grid.png';
import gridActiveIcon from '../../assets/icons/grid_active.png';
import reelsIcon from '../../assets/icons/reels.png';
import reelsActiveIcon from '../../assets/icons/reels_active.png';
import mentionsIcon from '../../assets/icons/mentions.png';
import mentionsActiveIcon from '../../assets/icons/mentions_active.png';


/* Styled Components GridTabBar */
const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const TabItem = styled.button`
  background: none;
  border: none;
  margin: 20px 0 2px 0;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
    transition: opacity 0.2s ease;
  }
`;


const GridTabBar = () => {
  const [activeTab, setActiveTab] = useState('grid');

  return (
    <TabBar>

      <TabItem onClick={() => setActiveTab('grid')}>
        <img
          src={activeTab === 'grid' ? gridActiveIcon : gridIcon}
          alt="Grid Icon"
        />
      </TabItem>

      <TabItem onClick={() => setActiveTab('reels')}>
        <img
          src={activeTab === 'reels' ? reelsActiveIcon : reelsIcon}
          alt="reels Icon"
        />
      </TabItem>

      <TabItem onClick={() => setActiveTab('mentions')}>
        <img
          src={activeTab === 'mentions' ? mentionsActiveIcon : mentionsIcon}
          alt="mentions Icon"
        />
      </TabItem>

    </TabBar>
  );
};

export default GridTabBar;
