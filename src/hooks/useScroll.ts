import { useEffect, useState } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleChangeOffset = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleChangeOffset);

    return () => {
      window.removeEventListener("scroll", handleChangeOffset);
    };
  }, []);

  return { scrollY };
}
