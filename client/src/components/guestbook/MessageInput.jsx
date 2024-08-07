import React from "react";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const MessageInput = ({onSendMessage}) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: {isValid},
  } = useForm({
    defaultValues: {
      message: "",
    },
  });
  const onSubmit = (data) => {
    if (onSendMessage) {
      onSendMessage(data.message);
      reset()
    }
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="w-full flex flex-row gap-2 sm:gap-4 text-lg sm:text-xl mt-5">
      <div className=" flex-1">
        <input
          className="w-full bg-inherit outline-none border-[2px] border-neutral-300 px-2 sm:px-4 py-2 sm:py-3 rounded-md"
          type="text"
          placeholder="type a message..."
          {...register("message",{required:true})}
        />
      </div>
      <button onClick={handleSubmit(onSubmit)} className={` rounded-lg h-12 sm:h-14 aspect-square flex justify-center items-center ${isValid?" bg-neutral-500 hover:bg-sky-600 cursor-pointer":" bg-neutral-500 cursor-not-allowed"}`}>
        <FiSend className=" text-xl sm:text-2xl" color="#f5f5f5" />
      </button>
      <DevTool control={control} />
    </div>
  );
};

export default MessageInput;
