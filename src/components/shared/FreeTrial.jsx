"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FaCheck } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";

const FreeTrial = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.email.value.includes("@") ||
      !e.target.email.value.includes("gmail")
    ) {
      setMessage("Email is a required field");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    setLoading(true);
    new Promise((resolve) =>
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 2000)
    );
    const hasEmail = sessionStorage.getItem("email");
    hasEmail == e.target.email.value ? setResult(0) : setResult(1)
    sessionStorage.setItem("email", e.target.email.value);
  };
  return (
    <section>
      <form className="relative w-3/4 flex" onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          autoComplete="off"
          className="w-3/4 p-4 px-6 rounded-s-full border outline-none border-e-0 text-secondary-gray border-primary-blue-200/60 bg-gradient-to-r from-[#0F1631] to-[#18264A] "
          placeholder="Your business email..."
        />
        <div
          className={`${
            loading ? "w-[20%]" : "w-1/4"
          } rounded-e-full border border-s-0 outline-none border-primary-blue-200/60 bg-gradient-to-r from-[#1B244F]  via-[#273871] to-[#2C427F] flex justify-end items-center px-1`}
        >
          {loading ? (
            <div role="status" className="p-2 rounded-full bg-primary-blue-200">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-white/40 animate-spin fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : result == null ? (
            <Button disabled={loading} type="submit">
              Free trial
            </Button>
          ) : result == 0 ? (
            <span className="p-2 rounded-full bg-[#BE6AA7]">
              <HiXMark className="w-8 h-8" />
            </span>
          ) : (
            <span className="p-2 rounded-full bg-[#4DB29A]">
              <FaCheck className="w-8 h-8" />
            </span>
          )}
        </div>
      </form>
      {message && <p className="mt-3 ml-8 text-red-500">{message}</p>}
    </section>
  );
};

export default FreeTrial;
