import { useState, useEffect, useCallback } from "react";
import type { SearchImage } from "../models";

const STORAGE_KEY = "liked_photos";

export const useLikes = (image?: SearchImage) => {
  const [isLiked, setIsLiked] = useState(false);

  const getLikedPhotos = (): SearchImage[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const getIsLiked = useCallback((img: SearchImage): boolean => {
    return getLikedPhotos().some(({ id }) => id === img.id);
  }, []);

  const setLikedPhotos = (photos: SearchImage[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  };

  const onLikeImage = (img: SearchImage) => {
    const liked = getLikedPhotos();
    if (!getIsLiked(img)) {
      setLikedPhotos([...liked, img]);
    }
  };

  const onDisLikeImage = (img: SearchImage) => {
    const liked = getLikedPhotos();
    setLikedPhotos(liked.filter(({ id }) => id !== img.id));
  };

  const toggleLike = (img: SearchImage) => {
    if (getIsLiked(img)) {
      onDisLikeImage(img);
      setIsLiked(false);
    } else {
      onLikeImage(img);
      setIsLiked(true);
    }
  };

  useEffect(() => {
    if (image) {
      setIsLiked(getIsLiked(image));
    }
  }, [getIsLiked, image]);

  return {
    isLiked,
    toggleLike,
    onLikeImage,
    onDisLikeImage,
    getLikedPhotos,
  };
};
