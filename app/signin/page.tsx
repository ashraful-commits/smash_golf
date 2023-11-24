"use client";
import { register } from "@/Utility/Register";
import Toastify from "@/Utility/Toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
type Props = {
  callbackUrl?: string;
  error?: string;
};
import React, { useState } from "react";
const Login = (props: Props) => {
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleOnchange = (e: any) => {
    setInput((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleForm = async (e: any) => {
    e.preventDefault();

    try {
      await signIn("credentials", {
        email: input.email,
        password: input.password,
        redirect: true,
        callbackUrl:
          props.callbackUrl ??
          ("http://localhost:3000/" || "https://smash-golf.vercel.app/"),
      });
      setInput({
        email: "",
        password: "",
      });

      Toastify("Registration successful!", "success");
    } catch (error) {
      // Handle registration failure, show an error toast, etc.
      Toastify("Registration failed. Please try again.", "error");
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="bg-black py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-8 lg:text-3xl">
            Sign up
          </h2>
          <form
            onSubmit={handleForm}
            className="mx-auto max-w-lg rounded-lg border-[2px] border-gray-800"
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Email
                </label>
                <input
                  value={input.email}
                  onChange={handleOnchange}
                  type="email"
                  name="email"
                  className="w-full rounded  bg-gray-800 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Password
                </label>
                <input
                  value={input.password}
                  onChange={handleOnchange}
                  name="password"
                  type="password"
                  className="w-full rounded  bg-gray-800 px-3 py-2 text-white outline-none ring-indigo-300 transition duration-100 focus:ring"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-blue-600 md:text-base"
              >
                sign up
              </button>
            </div>
            <div className="flex items-center justify-center  p-4">
              <p className="text-center text-sm text-gray-500">
                Do&apos;n have an account?
                <a
                  href="/register"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
