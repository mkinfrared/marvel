import { useCallback, useEffect, useState } from "react";

const useWindowResize = () => {
  const [page, setPage] = useState({
    x: window.innerWidth,
    y: window.innerWidth
  });

  const handleResize = useCallback(() => {
    setPage({
      x: window.innerWidth,
      y: window.innerHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return page;
};

export default useWindowResize;
