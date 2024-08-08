import Tool from './Tool'
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useState, useEffect,useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const useIsMobile = () => {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(width <640);

  useEffect(() => {
    setIsMobile(width<640);
  }, [width]);
  return isMobile;
};

const ToolRow = ({stack,baseVelocity=3,direction='ltr'}) => {
  const baseX = useMotionValue(0);
  const directionFactor = useRef(direction==='ltr'?1:-1);
  const isMobile=useIsMobile();
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * (isMobile ? 8 : baseVelocity) * (delta /1000);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -300, v)}%`);



  return (
    <div className="relative overflow-hidden w-full">
      <motion.div className="flex whitespace-nowrap gap-4" style={{ x }}>
        {stack.map((tool, index) => (
          <Tool key={index} name={tool.name} icon={tool.icon} />
        ))}
        {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
          {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
          {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
          {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
          {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
      </motion.div>
    </div>
  )
}

export default ToolRow
