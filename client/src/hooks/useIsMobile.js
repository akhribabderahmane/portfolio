import { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const useIsLaptop = () => {
  const { width } = useWindowSize();

  const [isLaptop, setIsLaptop] = useState(width >1200);

  useEffect(() => {
    setIsLaptop(width >1200);
  }, [width]);
  return isLaptop;
};

export default useIsLaptop;
