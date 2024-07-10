import React from "react";
import { useController } from "react-hook-form";
import { IoIosInformationCircle } from "react-icons/io";
const TextInput = ({ name, label, type, placeholder, control }) => {
  const { field, fieldState } = useController({ control, name });
  return (
    <div className="">
      <input
        type={type}
        label={label}
        {...field}
        className=" outline-none bg-inherit border-2 border-gray-600 rounded-lg px-4 py-3 text-lg w-full capitalize"
        placeholder={placeholder}
      />
      {fieldState.error && (
        <div className=" flex flex-row gap-2 items-center mt-1">
          <IoIosInformationCircle className="text-red-500" />
          <p className=" text-red-600">{fieldState?.error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
