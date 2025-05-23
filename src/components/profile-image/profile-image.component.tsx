import React from "react";
import { ProfileImageProps } from "./profile-image.interface";

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  src, 
  alt, 
  size = 200,
  className = ''
}) => {
  const [imgError, setImgError] = React.useState(false);
  const initials = alt
    .split(' ')
    .map(name => name[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  if (!src || imgError) {
    return (
      <div 
        className={`w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white text-4xl font-bold ${className}`}
        style={{ width: size, height: size }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
      onError={() => setImgError(true)}
    />
  );
};

export default ProfileImage;