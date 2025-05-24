import { useState } from 'react';

/* 모달 조작 버튼(이전 그림, 다음 그림, 닫기) */
export default function useModalImageNavigation(posts = []) {
  const [onModalImage, setOnModalImage] = useState(null);
  const [modalPostIndex, setModalPostIndex] = useState(null);
  const closeModal = () => setOnModalImage(null);

  const changeImage = (direction) => {
    if (modalPostIndex == null) return;

    const total = posts.length;
    const newIndex =
      direction === 'next'
        ? (modalPostIndex === total - 1 ? total - 1 : modalPostIndex + 1)  // 마지막 페이지면 이동하지 않기
        : (modalPostIndex === 0 ? 0 : modalPostIndex - 1)              // 첫 페이지면 이동하지 않기

    const post = posts[newIndex];  // 이동 그림으로 업데이트

    setModalPostIndex(newIndex);       // 업데이트 적용
    setOnModalImage(post.postImage);   // 업데이트 적용
  };

  const handleNext = () => changeImage('next');
  const handlePrev = () => changeImage('prev');

  return {
    onModalImage,
    setOnModalImage,
    setModalPostIndex,
    closeModal,
    handleNext,
    handlePrev,
  };
}
