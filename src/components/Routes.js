import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const onLocationChange = () => {
    setCurrentPath(window.location.pathname);
  };

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // effect
    window.addEventListener("popstate", onLocationChange);
    return () => {
      // cleanup
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
