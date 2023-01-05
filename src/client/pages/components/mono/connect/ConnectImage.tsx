import React from 'react';

type ConnectImageProps = {
  image: string;
};
const ConnectImage = ({image}: ConnectImageProps) => {
  return (
    <div className="mr-4 ml-3.5">
      <img src={image} alt="" />
    </div>
  );
};
export default ConnectImage;
