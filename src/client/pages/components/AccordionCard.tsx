import React, { useState } from "react";

type AccordionProps = {
  title?: string;
  content?: string;
  isOpen?: boolean;
};

export const Accordion = ({
  title,
  content,
  isOpen = false,
}: AccordionProps) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  const toggleAccordion = () => {
    setIsOpenState(!isOpenState);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4 max-w-screen-xl">
      <div
        className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="font-custom font-medium text-skin-base text-tiny md:text-sm lg:text-base xl:text-lg flex-grow">
          {title}
        </div>
        <div className="transform duration-300">
          {isOpenState ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpenState && (
        <div className="p-4">
          <div className="font-custom font-medium text-skin-subtitle text-xs md:text-sm lg:text-base xl:text-lg">
            {content}
          </div>
        </div>
      )}
      {!isOpenState && <div className="grid w-full"></div>}
    </div>
  );
};
