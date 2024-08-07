import React,{useRef} from 'react'
import Tool from './Tool'
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";


const ToolRow = ({stack,baseVelocity=3,direction='ltr'}) => {
  const baseX = useMotionValue(0);
  const directionFactor = useRef(direction==='ltr'?1:-1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta /1000);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -600, v)}%`);



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
          <Tool key={index} name={tool.name} icon={tool.icon} />
        ))}
        {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
         {stack.map((tool, index) => (
          <Tool key={index} name={tool.name} icon={tool.icon} />
        ))}
        {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
         {stack.map((tool, index) => (
          <Tool key={index} name={tool.name} icon={tool.icon} />
        ))}
        {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
         {stack.map((tool, index) => (
          <Tool key={index} name={tool.name} icon={tool.icon} />
        ))}
        {stack.map((tool, index) => (
          <Tool key={index + stack.length} name={tool.name} icon={tool.icon} />
        ))}
      </motion.div>
    </div>
  )
}

export default ToolRow
