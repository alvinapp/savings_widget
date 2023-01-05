import React from 'react';

type CloudImageProps = {
  imageUrl?: string;
};

const CloudImage: React.FC<CloudImageProps> = ({imageUrl}) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default CloudImage;
