import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signInWithGoogle,signInWithGithub } from "../../firebase";
const SignIn = () => {
  return (
    <div>
      <div className=" text-text-light dark:text-text-dark">
        <p>sign In ,dont worry your data is in safe hands</p>
      </div>
      <div className=" flex flex-row gap-4">
        <button onClick={signInWithGoogle} className=" flex flex-row gap-2 items-center justify-center px-3 py-3 bg-neutral-50 text-neutral-900 shadow-sm eounded-md text-lg font-normal rounded-md">
          <FcGoogle size={30} />
          <p>Sign In with Google</p>
        </button>
        <button onClick={signInWithGithub} className=" flex flex-row gap-2 items-center justify-center px-3 py-3 bg-neutral-900 border-2 border-neutral-100 text-neutral-100 shadow-sm eounded-md text-lg font-normal rounded-md">
          <FaGithub size={30} />
          <p>Sign In with Github</p>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
