const STORAGE_KEY = "liked_photos";

export const useLikes = () => {
  const getLikedPhotos = (): string[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const setLikedPhotos = (ids: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  };

  const isLiked = (id: string): boolean => {
    return getLikedPhotos().includes(id);
  };

  const onLikeImage = (id: string) => {
    const liked = getLikedPhotos();
    if (!liked.includes(id)) {
      setLikedPhotos([...liked, id]);
    }
  };

  const onDisLikeImage = (id: string) => {
    const liked = getLikedPhotos();
    setLikedPhotos(liked.filter(photoId => photoId !== id));
  };

  const toggleLike = (id: string) => {
    if (isLiked(id)) {
      onDisLikeImage(id);
    } else {
      onLikeImage(id);
    }
  };

  return {
    isLiked,
    onLikeImage,
    onDisLikeImage,
    toggleLike,
  };
};
