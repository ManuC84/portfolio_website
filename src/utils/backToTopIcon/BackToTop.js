import React, { useEffect, useState } from "react";
import { BackToTopIcon, BackToTopIconContainer } from "./BackToTopStyles";

import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <BackToTopIconContainer onClick={scrollToTop}>
        <BackToTopIcon>
          <FaChevronUp font-size="40px" />
        </BackToTopIcon>
      </BackToTopIconContainer>
    )
  );
};

export default BackToTop;
