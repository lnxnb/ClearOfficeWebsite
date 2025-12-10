import React from "react";

const CTA = () => {
  return (
    <div className="h-[422px] relative w-full bg-[url('/images/home/cta.webp')] bg-cover bg-[center_20%] flex justify-center items-center px-4">
      <div className=" absolute inset-0 bg-primary/70"></div>
      <div className="flex flex-col gap-8 items-center z-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-satoshi font-bold text-4xl md:text-5xl max-lg:text-center lg:text-5xl/[130%] tracking-[-2%]">
            Ready to Empower Your Enterprise?
          </h1>
          <p className="text-white font-satoshi text-lg/[150%] max-lg:text-center">
            We believe in a future where intelligent automation is the
            cornerstone of every successful enterprise.
          </p>
        </div>

        <a
          href="/contact-us.html"
          className="bg-white max-md:text-center text-primary md:max-lg:self-center md:w-fit w-full text-base/[130%] tracking-[-2%] font-bold font-satoshi px-6 py-4 rounded-full cursor-pointer   transition-all duration-300
hover:bg-primary/10 hover:text-white hover:ring hover:ring-white hover:shadow-[0_6px_20px_rgba(0,113,227,0.18)]
  hover:scale-[1.03]"
        >
          Begin your transformation
        </a>
      </div>
    </div>
  );
};

export default CTA;
