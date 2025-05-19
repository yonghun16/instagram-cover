/* avatars */
import Ruffles from '../avatar/Avatar1.png';
import sabanok from '../avatar/Avatar2.png';
import blue_bouy from '../avatar/Avatar3.png';
import waggles from '../avatar/Avatar4.png';
import stveio from '../avatar/Avatar5.png';

/* postImages */
import Ruffles1 from '../post/Ruffles1.png';
import Ruffles2 from '../post/Ruffles2.jpg';
import sabanok1 from '../post/sabanok1.jpg';
import sabanok2 from '../post/sabanok2.jpg';
import blue_bouy1 from '../post/blue_bouy1.jpg';
import blue_bouy2 from '../post/blue_bouy2.jpg';
import waggles1 from '../post/waggles1.jpg';
import waggles2 from '../post/waggles2.jpg';
import stveio1 from '../post/stveio1.jpg';
import stveio2 from '../post/stveio2.jpg';

const userData = [
  { 
    name: 'Ruffles', 
    image: Ruffles,
    newStory: false,
    stories: [
      {
        postImage: Ruffles1,
        likes: 100,
        comments: 200,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: Ruffles2,
        likes: 40,
        comments: 20,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      }
    ]
  },
  { 
    name: 'sabanok',
    image: sabanok,
    newStory: true,
    stories: [
      {
        postImage: sabanok1,
        likes: 100,
        comments: 200,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: sabanok2,
        likes: 40,
        comments: 20,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      }
    ]
  },
  { 
    name: 'blue_bouy',
    image: blue_bouy,
    newStory: true,
    stories: [
      {
        postImage: blue_bouy1,
        likes: 10,
        comments: 20,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: blue_bouy2,
        likes: 420,
        comments: 220,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      }
    ]
  },
  { 
    name: 'waggles',
    image: waggles,
    newStory: true,
    stories: [
      {
        postImage: waggles1,
        likes: 110,
        comments: 2,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: waggles2,
        likes: 40,
        comments: 5,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      }
    ]
  },
  { 
    name: 'stve.io',
    image: stveio,
    newStory: true,
    stories: [
      {
        postImage: stveio1,
        likes: 1000,
        comments: 2001,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      },
      {
        postImage: stveio2,
        likes: 19,
        comments: 209,
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, autem.",
      }
    ]
  },
];

const recentData = (num) => {
  const recentUser = Math.floor(Math.random() * num);
  const recentStory = Math.floor(Math.random() * 2);

  return { recentUser, recentStory };
}


export default userData;
export { recentData };
