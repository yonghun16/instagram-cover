// PostCard.jsx
import React from 'react';
import styled from 'styled-components';
import useToggleImg from '../hooks/useToogleImg';

import likeIcon from '../assets/icons/like.png';
import like_activeIcon from '../assets/icons/like_active.png';
import commentIcon from '../assets/icons/comment.png';
import shareIcon from '../assets/icons/share.png';
import bookmarkIcon from '../assets/icons/bookmark.png';
import bookmark_activeIcon from '../assets/icons/bookmark_active.png';
import moreIcon from '../assets/icons/more.png';

/* Post styled components */
const Post = styled.div`
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const PostUserImage = styled.div`
  width: 32px;
  height: 32px;
  background: gray;
  border-radius: 50%;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$src});
`;

const PostUserInfo = styled.div``;

const More = styled.img`
  height: 23px;
  padding-right: 5px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Username = styled.p`
  margin: 0;
  font-weight: bold;
`;

const Sponsored = styled.p`
  margin: 0;
  font-size: 12px;
  color: gray;
`;

const PostImage = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$src});
`;

const PostActions = styled.div`
  display: flex;
  font-size: 20px;
  gap: 10px;
  padding: 10px 10px 0 10px;
`;

const LeftIcon = styled.img`
  height: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const LikeIcon = styled.img`
  height: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const RightIcon = styled.img`
  height: 23px;
  margin-left: auto;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const PostInfo = styled.div`
  font-size: 14px;
  padding: 10px;
`;

const Comments = styled.p`
  color: gray;
  font-size: 13px;
`;

function PostCard({ user, story }) {
  const likeImg = useToggleImg(likeIcon, like_activeIcon);
  const bookmarkImg = useToggleImg(bookmarkIcon, bookmark_activeIcon);

  return (
    <Post>
      <PostHeader>
        <PostUserImage $src={user.image} />
        <PostUserInfo>
          <Username>{user.name}</Username>
          <Sponsored>Sponsored</Sponsored>
        </PostUserInfo>
        <More src={moreIcon} alt="more"/>
      </PostHeader>
      <PostImage $src={story.postImage} />
      <PostActions>
        <LikeIcon src={likeImg.currentImg} onClick={likeImg.toggleImage} alt="like" />
        <LeftIcon src={commentIcon} alt="comment" />
        <LeftIcon src={shareIcon} alt="share" />
        <RightIcon src={bookmarkImg.currentImg} onClick={bookmarkImg.toggleImage} alt="bookmark" />
      </PostActions>
      <PostInfo>
        <p><strong>{story.likes.toLocaleString()} Likes</strong></p>
        <p><strong>{user.name}</strong> {story.story}</p>
        <Comments>View all {story.comments.toLocaleString()} comments</Comments>
      </PostInfo>
    </Post>
  );
}

export default PostCard;
