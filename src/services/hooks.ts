import { useEffect, useState } from "react";

export const useScrollOffset = (): number => {
  const [scrollOffset, setTitle] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollOffset]);

  const handleScroll = () => {
    const topOffset = window.pageYOffset;

    setTitle(topOffset);
  };

  return scrollOffset;
};
