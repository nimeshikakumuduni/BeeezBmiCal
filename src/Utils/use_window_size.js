import { useEffect, useState } from "react";

const mobileWidth = 450;
const webWidth = 800;

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    isWeb: false,
    isTab: false,
    isMobile: false,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        isWeb: window.innerWidth >=webWidth,
        isTab: window.innerWidth >= mobileWidth && window.innerWidth< webWidth,
        isMobile: window.innerWidth < mobileWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

