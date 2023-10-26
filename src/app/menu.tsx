'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Menu() {
  const [iconHover, setIconHover] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);

  const handleClick = () => {
    setIconClicked(!iconClicked);
  };

  const handleMouseEnter = () => {
    setIconHover(true);
  };

  const handleMouseLeave = () => {
    setIconHover(false);
  };

  let imageUrl = '/Menu.png';

  if (iconHover === true) {
    imageUrl = '/MenuHovered.png';
  } else if (iconClicked === true) {
    imageUrl = '/MenuClicked.png';
  }

  return (
    <>
      <div
        className="menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={imageUrl}
          alt="Menu"
          width={42}
          height={42}
          onClick={handleClick}
        ></Image>
      </div>
    </>
  );
}
