import React from "react";
import ToolRow from "./ToolRow";
import { stack, stack1, stack2 } from "../../constant/Stack";
const Stack = () => {
  const stacks = [stack, stack1, stack2];
  return (
    <div className=" space-y-5 relative overflow-hidden">
      <div className=" dark:absolute left-0 top-0 h-full w-40 bg-gradient-to-r  from-background-light-950  pointer-events-none z-30"></div>
      {/* Right Gradient Shadow */}
      <div className=" dark:absolute  right-0 top-0 h-full w-40 bg-gradient-to-l  from-background-light-950  pointer-events-none z-30"></div>
      {stacks.map((stack,index) => (
        <ToolRow stack={stack} key={index} direction={(index%2==0)?'rtl':'ltr'} />
      ))}
    </div>
  );
};

export default Stack;
