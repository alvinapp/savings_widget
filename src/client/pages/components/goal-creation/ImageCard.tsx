import React from "react";
type ImageCardProps = {
  image?: string;
  onClick?: () => void;
};
export const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className="h-24 w-24 rounded-lg" onClick={onClick}>
      <img src={image} className="h-24 w-24 rounded-lg object-cover" />
    </div>
  );
};
