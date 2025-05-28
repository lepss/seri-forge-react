import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll vers le haut à chaque changement de page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
