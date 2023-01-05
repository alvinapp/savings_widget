import React from 'react';

type NavBarTitleProps = {
  title?: string;
  titleColor?: string;
};
const NavBarTitle = ({title, titleColor}: NavBarTitleProps) => {
  return (
    <div
      id="al__navbar-title"
      className={`tracking-title font-workSans font-semibold text-base ${
        titleColor != null ? titleColor : 'text-black'
      }`}
    >
      {title}
    </div>
  );
};
export default NavBarTitle;
