/* avatars */
import Ruffles from '../avatar/Avatar1.png';
import sabanok from '../avatar/Avatar2.png';
import blue_bouy from '../avatar/Avatar3.png';
import waggles from '../avatar/Avatar4.png';
import stveio from '../avatar/Avatar5.png';

/* postImages */
import Ruffles1 from '../post/Ruffles1.png';
import Ruffles1_1 from '../post/Ruffles1_1.jpg';
import Ruffles1_2 from '../post/Ruffles1_2.jpg';
import Ruffles2 from '../post/Ruffles2.jpg';
import Ruffles3 from '../post/Ruffles3.jpg';
import Ruffles3_1 from '../post/Ruffles3_1.jpg';
import Ruffles3_2 from '../post/Ruffles3_2.jpeg';
import Ruffles4 from '../post/Ruffles4.jpg';
import Ruffles5 from '../post/Ruffles5.jpg';
import Ruffles6 from '../post/Ruffles6.png';

import sabanok1 from '../post/sabanok1.jpg';
import sabanok1_1 from '../post/sabanok1_1.jpg';
import sabanok1_2 from '../post/sabanok1_2.jpg';
import sabanok2 from '../post/sabanok2.jpg';
import sabanok2_1 from '../post/sabanok2_1.jpg';
import sabanok2_2 from '../post/sabanok2_2.jpg';
import sabanok3 from '../post/sabanok3.jpg';
import sabanok4 from '../post/sabanok4.jpg';
import sabanok5 from '../post/sabanok5.jpg';

import blue_bouy1 from '../post/blue_bouy1.jpg';
import blue_bouy1_1 from '../post/blue_bouy1_1.jpg';
import blue_bouy1_2 from '../post/blue_bouy1_2.jpg';
import blue_bouy2 from '../post/blue_bouy2.jpg';
import blue_bouy2_1 from '../post/blue_bouy2_1.jpg';
import blue_bouy2_2 from '../post/blue_bouy2_2.jpg';
import blue_bouy3 from '../post/blue_bouy3.jpg';
import blue_bouy4 from '../post/blue_bouy4.jpg';
import blue_bouy5 from '../post/blue_bouy5.jpg';
import blue_bouy6 from '../post/blue_bouy6.jpeg';

import waggles1 from '../post/waggles1.jpg';
import waggles2 from '../post/waggles2.jpg';
import waggles2_1 from '../post/waggles2_1.jpg';
import waggles2_2 from '../post/waggles2_2.jpg';
import waggles3 from '../post/waggles3.jpg';
import waggles3_1 from '../post/waggles3_1.jpg';
import waggles3_2 from '../post/waggles3_2.jpg';

import stveio1 from '../post/stveio1.jpg';
import stveio1_1 from '../post/stveio1_1.jpg';
import stveio1_2 from '../post/stveio1_2.jpg';
import stveio2 from '../post/stveio2.jpg';
import stveio2_1 from '../post/stveio2_1.jpg';
import stveio2_2 from '../post/stveio2_2.jpg';
import stveio3 from '../post/stveio3.jpg';
import stveio4 from '../post/stveio4.jpg';
import stveio5 from '../post/stveio5.jpg';
import stveio6 from '../post/stveio6.webp';

const userData = [
  { 
    name: 'Ruffles', 
    image: Ruffles,
    intro: 'My name is Ruffles. Lorem ipsum dolor sit amet consectetur',

    post: 123,
    followers: 19,
    knownFollower: "rezamong",  // 로그인한 유저가 봤을 때, 알고 있는 팔로워
    knownFollowerCount: 3,      // 로그인한 유저가 봤을 때, 팔로워 중 지인 수
    following: 12,
    hashTag: ['#dog', '#cat', '#puppy'],

    newStory: false,
    posts: [
      {
        postImage: [Ruffles1, Ruffles1_1, Ruffles1_2],
        likes: 100,
        comments: 200,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [Ruffles2],
        likes: 40,
        comments: 20,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [Ruffles3, Ruffles3_1, Ruffles3_2],
        likes: 44,
        comments: 22,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [Ruffles4],
        likes: 400,
        comments: 210,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [Ruffles5],
        likes: 320,
        comments: 110,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [Ruffles6],
        likes: 112,
        comments: 211,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
    ]
  },
  { 
    name: 'sabanok',
    image: sabanok,
    intro: 'My name is sabanok. Lorem ipsum dolor sit amet consectetur',
    hashTag: ['#GoldenRetriever', '#ShibaInu', '#FrenchBulldog'],

    post: 23,
    followers: 29,
    knownFollower: "momcat",
    knownFollowerCount: 5,
    following: 332,

    newStory: true,
    posts: [
      {
        postImage: [sabanok1, sabanok1_1, sabanok1_2],
        likes: 12,
        comments: 200,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [sabanok2, sabanok2_1, sabanok2_2],
        likes: 40,
        comments: 29,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [sabanok3],
        likes: 70,
        comments: 27,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [sabanok4],
        likes: 410,
        comments: 290,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [sabanok5],
        likes: 310,
        comments: 10,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
    ]
  },
  { 
    name: 'blue_bouy',
    image: blue_bouy,
    intro: 'My name is blue_bouy. Lorem ipsum dolor sit amet consectetur',
    hashTag: ['#BorderCollie', '#Dachshund', '#Samoyed'],

    post: 123,
    followers: 229,
    knownFollower: "reallycool128",  // 대표 팔로워
    knownFollowerCount: 2,
    following: 832,

    newStory: true,
    posts: [
      {
        postImage: [blue_bouy1, blue_bouy1_1, blue_bouy1_2],
        likes: 10,
        comments: 20,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [blue_bouy2, blue_bouy2_1, blue_bouy2_2],
        likes: 20,
        comments: 20,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [blue_bouy3],
        likes: 41,
        comments: 20,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [blue_bouy4],
        likes: 9,
        comments: 4,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [blue_bouy5],
        likes: 11,
        comments: 22,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [blue_bouy6],
        likes: 10,
        comments: 2,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
    ]
  },
  { 
    name: 'waggles',
    image: waggles,
    intro: 'My name is waggles. Lorem ipsum dolor sit amet consectetur',
    hashTag: ['#MaineCoon', '#SphynxCat', '#Ragdoll'],

    post: 1123,
    followers: 1229,
    knownFollower: "zzang9",
    knownFollowerCount: 1,
    following: 1731,

    newStory: true,
    posts: [
      {
        postImage: [waggles1],
        likes: 11,
        comments: 2,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [waggles2, waggles2_1, waggles2_2],
        likes: 8,
        comments: 5,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [waggles3, waggles3_1, waggles3_2],
        likes: 2,
        comments: 3,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
    ]
  },
  { 
    name: 'stve.io',
    image: stveio,
    intro: 'My name is stve.io. Lorem ipsum dolor sit amet consectetur',
    hashTag: ['#BritishShorthair', '#BengalCat', '#ScottishFold'],

    post: 3123,
    followers: 5229,
    knownFollower: "songyonghun",
    knownFollowerCount: 19,
    following: 5731,

    newStory: true,
    posts: [
      {
        postImage: [stveio1, stveio1_1, stveio1_2],
        likes: 1000,
        comments: 2001,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [stveio2, stveio2_1, stveio2_2],
        likes: 1119,
        comments: 2209,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [stveio3],
        likes: 2019,
        comments: 2309,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [stveio4],
        likes: 1999,
        comments: 2209,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [stveio5],
        likes: 9919,
        comments: 2309,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: [stveio6],
        likes: 7339,
        comments: 2309,
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
    ]
  },
];


export default userData;
