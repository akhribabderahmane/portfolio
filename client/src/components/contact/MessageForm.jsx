import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import emailjs from 'emailjs-com';

const MessageForm = () => {
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    message: yup.string().required("Message is required"),
  });
  const { control, handleSubmit ,register,reset} = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
    mode:"onTouched",
  });
  const onSubmit = (data) => {
    emailjs.send('service_bkposu4', 'template_cvneq7g', data, '5cUh2upw4bCZwofyd')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        reset();
      }, (error) => {
        console.log('FAILED...', error);
      })
}
  return (
    <div className=" py-8 space-y-6">
      <h3 className=" text-2xl font-medium ">or send a message</h3>
      {/* form */}
      <div>
        <form action="POST" className="grid  grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="name"
            label="name"
            type="text"
            placeholder="name*"
            control={control}
          />
          <TextInput
            name="email"
            label="email"
            type="email"
            placeholder="example@gmail.com"
            control={control}
          />
          <textarea
            className=" h-40 col-span-2 outline-none bg-inherit border-2 border-gray-600 rounded-lg px-4 py-3 text-lg"
            name="text"
            id="message"
            {...register("message")}
            placeholder="message*"
          ></textarea>
          <button className=" col-span-2 bg-blue-bright-darker-1 hover:bg-blue-bright-darker-2 hover:scale-[1.01] transition duration-700 backdrop-brightness-50 text-2xl text-text-dark py-2 rounded-lg "> send a message</button>
        </form>
      </div>
      <DevTool control={control} /> {/* set up the dev tool */}
    </div>
  );
};

export default MessageForm;
