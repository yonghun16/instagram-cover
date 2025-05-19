import { avatarImageMap } from './avatarImageMap';

const rawUserData = [
  { 
    name: 'Ruffles', 
    newStory: false
  },
  { 
    name: 'sabanok',
    newStory: true
  },
  { 
    name: 'blue_bouy',
    newStory: true
  },
  { 
    name: 'waggles',
    newStory: true
  },
  { 
    name: 'stve.io',
    newStory: true
  },
];

const userData = rawUserData.map(user => ({
  ...user,                  // name : 'Ruffles' 이런식으로 대입됨.
  image: avatarImageMap[user.name],
}));

export default userData;
