import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, [location.pathname]); // Trigger on pathname change

  return null;
}

export default ScrollToTop;
