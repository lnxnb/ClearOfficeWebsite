"use client";

import React, { useState } from "react";

const FormDetails = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const nextErrors = {};

    if (!firstName) {
      nextErrors.firstName = "First name is required.";
    }

    if (!lastName) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!email) {
      nextErrors.email = "Email is required.";
    }

    if (!message) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
    }
  };

  return (
    <div className="max-w-[1536px] mx-auto flex flex-col gap-8 pb-12 md:pb-18 lg:pb-24 xl:pb-32.5 px-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
          <div className="size-2 bg-primary rounded-full"></div>
          <h1 className="text-sm/[150%] text-primary font-satoshi">
            Get in touch
          </h1>
        </div>
        <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] text-center tracking-[-2%] text-neutral-800">
          Drop Us a <span className="text-primary"> Message</span>
        </h1>
        <p className="font-satoshi text-lg/[150%] text-center text-neutral-600">
          We’re always happy to hear from you and will get back to you as soon
          as possible.
        </p>
      </div>
      <div className="bg-neutral-50 border border-neutral-200 rounded-4xl p-8">
        <form
          action="https://formspree.io/f/xvgewdvo"
          method="POST"
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <input type="hidden" name="_redirect" value="https://clearoffice.org/thank-you" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <div className="flex max-md:flex-col items-start gap-4">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <input
                type="text"
                className="w-full py-5 px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none placeholder:text-neutral-400"
                placeholder="First Name"
                name="firstName"
                aria-invalid={errors.firstName ? "true" : "false"}
                required
              />
              {errors.firstName ? (
                <p className="text-sm text-red-600" role="alert">
                  {errors.firstName}
                </p>
              ) : null}
            </div>
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <input
                type="text"
                className="w-full py-5 px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none placeholder:text-neutral-400"
                placeholder="Last Name"
                name="lastName"
                aria-invalid={errors.lastName ? "true" : "false"}
                required
              />
              {errors.lastName ? (
                <p className="text-sm text-red-600" role="alert">
                  {errors.lastName}
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <div className="flex w-full flex-col gap-2">
              <input
                type="email"
                className="py-5 px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-full placeholder:text-neutral-400"
                placeholder="Email Address"
                name="email"
                aria-invalid={errors.email ? "true" : "false"}
                required
              />
              {errors.email ? (
                <p className="text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <div className="flex w-full flex-col gap-2">
              <textarea
                className="py-5 resize-none px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-full placeholder:text-neutral-400"
                placeholder="Message here"
                rows={6}
                name="message"
                aria-invalid={errors.message ? "true" : "false"}
                required
              />
              {errors.message ? (
                <p className="text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>
          </div>
          <button
            className="flex items-center max-md:justify-center gap-3 w-full md:w-fit self-center bg-primary backdrop-blur-xs text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-4 py-3 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90
  hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)]
  hover:scale-[1.03]"
          >
            Send Message{" "}
            <span>
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_307_1114)">
                  <path
                    d="M7.33301 8.25H14.6663"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33301 11.9167H12.833"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 3.66675C17.2293 3.66675 17.9288 3.95648 18.4445 4.4722C18.9603 4.98793 19.25 5.6874 19.25 6.41675V13.7501C19.25 14.4794 18.9603 15.1789 18.4445 15.6946C17.9288 16.2104 17.2293 16.5001 16.5 16.5001H11.9167L7.33333 19.2501V16.5001H5.5C4.77065 16.5001 4.07118 16.2104 3.55546 15.6946C3.03973 15.1789 2.75 14.4794 2.75 13.7501V6.41675C2.75 5.6874 3.03973 4.98793 3.55546 4.4722C4.07118 3.95648 4.77065 3.66675 5.5 3.66675H16.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_307_1114">
                    <rect width={22} height={22} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDetails;
