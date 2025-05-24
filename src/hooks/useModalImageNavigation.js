import { useState, useCallback } from 'react';

const useModalImageNavigation = (displayPosts) => {
  const [modalPostIndex, setModalPostIndex] = useState(null);
  const [modalImage, setModalImage] = useState([]);

  const changeImage = useCallback((direction) => {
    if (modalPostIndex == null || displayPosts.length === 0) return;

    const total = displayPosts.length;
    const newIndex =
      direction === 'next'
        ? (modalPostIndex + 1) % total
        : (modalPostIndex - 1 + total) % total;

    const post = displayPosts[newIndex];
    const image = post.postImage;

    setModalPostIndex(newIndex);
    setModalImage(Array.isArray(image) ? image : [image]);
  }, [modalPostIndex, displayPosts]);

  const openModalAt = useCallback((index) => {
    const post = displayPosts[index];
    const image = post.postImage;

    setModalPostIndex(index);
    setModalImage(Array.isArray(image) ? image : [image]);
  }, [displayPosts]);

  const closeModal = useCallback(() => {
    setModalPostIndex(null);
    setModalImage([]);
  }, []);

  return {
    modalImage,
    modalPostIndex,
    handleNext: () => changeImage('next'),
    handlePrev: () => changeImage('prev'),
    openModalAt,
    closeModal,
  };
};

export default useModalImageNavigation;
