import { avatarImageMap } from './avatarImageMap';

const rawUserData = [
  { name: 'Ruffles' },
  { name: 'sabanok' },
  { name: 'blue_bouy' },
  { name: 'waggles' },
  { name: 'stve.io' },
];

const userData = rawUserData.map(user => ({
  ...user,                  // name : 'Ruffles' 이런식으로 대입됨.
  image: avatarImageMap[user.name],
}));

export default userData;
