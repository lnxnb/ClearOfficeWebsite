"use client";
import CommonHeader from "@/app/components/common/CommonHeader";
import CTA from "@/app/components/home/CTA";
import OurApproach from "@/app/components/home/OurApproach";
import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState(null);
  return (
    <div>
      <CommonHeader
        title={"Our Careers"}
        text={"Clear Office Career Opportunities"}
      />
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8 pb-12 md:pb-18 lg:pb-24 xl:pb-32.5 px-4 xl:-mt-50">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
            <div className="size-2 bg-primary rounded-full"></div>
            <h1 className="text-sm/[150%] text-primary font-satoshi">
              Get in touch
            </h1>
          </div>
          {/* <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] text-center tracking-[-2%] text-neutral-800">
            Drop Us a <span className="text-primary"> Message</span>
          </h1> */}
          <p className="font-satoshi text-lg/[150%] text-center text-neutral-600">
            Our goal at Clear Office is to build a team of exceptional people
            whom we admire, trust, and genuinely enjoy working with. We look for
            individuals with directly applicable experience, a commitment to
            outstanding service, and a strong sense of agency and personal
            responsibility.
            <br />
            <br />
            If you feel you would be a outstanding addition to our team, we
            would love to hear from you.
          </p>
        </div>
        <div className="bg-neutral-50 border border-neutral-200 rounded-4xl p-8">
          <form className="flex flex-col gap-8">
            <div className="flex max-md:flex-col items-center gap-4">
              <input
                type="text"
                className="py-5 px-6 max-md:w-full bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-1/2 placeholder:text-neutral-400"
                placeholder="First Name"
              />
              <input
                type="text"
                className="py-5 px-6 max-md:w-full bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-1/2 placeholder:text-neutral-400"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              className="py-5 px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-full placeholder:text-neutral-400"
              placeholder="Email Address"
            />
            <input
              type="email"
              className="py-5 px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-full placeholder:text-neutral-400"
              placeholder="Desired Role"
            />
            <textarea
              className="py-5 resize-none px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-full placeholder:text-neutral-400"
              placeholder="Massage here"
              rows={6}
            />
            <div className="flex flex-col gap-3">
              {/* Upload Button */}
              <label
                htmlFor="file"
                className="flex items-center justify-between gap-4 w-fit bg-white cursor-pointer font-satoshi border border-neutral-200 rounded-lg py-2 px-4 drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] hover:border-primary/50 transition-all duration-200"
              >
                <span className="text-neutral-500 text-base w-80 truncate">
                  {file ? file.name : "Attach documents"}
                </span>

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-neutral-400"
                >
                  <path
                    d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 14V3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 8L12 3L17 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </label>

              <input
                type="file"
                id="file"
                accept=".pdf,.jpg,.jpeg,.png,.svg,.doc,.docx"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
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
      <CTA />

      <OurApproach />
    </div>
  );
}
