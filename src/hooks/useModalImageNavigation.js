/* import libraries */
import { useState } from 'react';


function useModalImageNavigation(posts = []) {
  /* 모달 조작 (이전 그림, 다음 그림, 닫기) */
  const [onModalImage, setOnModalImage] = useState(null);      // 모달 열기, 닫기 상태
  const [modalPostIndex, setModalPostIndex] = useState(null);  // 모달 그림의 인덱스

  // 모달 닫기
  const closeModal = () => setOnModalImage(null);

  // 모달 포스트 변경 함수(callback)
  const changePost = (direction) => {
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

  // 다음 포스트로 변경
  const handleNext = () => changePost('next');

  // 이전 포스트로 변경
  const handlePrev = () => changePost('prev');

  return {
    onModalImage,       // 모달 상태(true, false)
    setOnModalImage,    // 모달 열고 닫기
    setModalPostIndex,  // 모달 포스트의 이미지 인덱스 변경

    closeModal,  // 모달 닫기
    handleNext,  // 다음 포스트
    handlePrev,  // 이전 포스트
  };
}
export default useModalImageNavigation;
