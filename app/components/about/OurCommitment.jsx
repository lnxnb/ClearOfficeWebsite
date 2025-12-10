import React from "react";

const OurCommitment = () => {
  const commits = [
    {
      title: "Information Security Management Policy (ISMS)",
      description:
        "We are committed to protecting the confidentiality, integrity, and availability of all critical information and systems.",
      subtitle: "To uphold our ISMS standards,",
      points: [
        "Implement structured security policies, processes, and controls across all operations.",
        "Safeguard sensitive data, including PII and all essential digital assets.",
        "Ensure full compliance with regulatory, statutory, and contractual security obligations.",
        "Conduct ongoing security awareness training for all employees.",
        "Continuously improve our ISMS through regular audits, reviews, and measurable objectives.",
      ],
    },
    {
      title: "Quality Management (QMS)",
      description:
        "We deliver services that meet high standards of performance, reliability, and customer satisfaction.",
      subtitle: "To maintain and enhance our QMS, we:",
      points: [
        "Establish systems that consistently meet customer expectations.",
        "Optimize resources to support continuous quality improvement.",
        "Ensure compliance with specifications through a “do it right the first time” approach.",
        "Provide training and resources that empower teams to deliver exceptional work.",
        "Select and evaluate suppliers based on quality, reliability, and service excellence.",
        "Maintain timely and uninterrupted delivery of all products and services.",
      ],
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 xl:py-32.5 max-w-[1536px] mx-auto flex flex-col gap-8 px-4">
      <div className="flex max-lg:flex-col gap-4 items-center">
        <div className="flex flex-col gap-2 lg:w-2/3 max-lg:items-center">
          <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
            <div className="size-2 bg-primary rounded-full"></div>
            <h1 className="text-sm/[150%] text-primary font-satoshi">
              ISMS & QMS Policy
            </h1>
          </div>
          <h1 className="font-satoshi font-bold max-lg:text-center max-lg:items-center text-4xl md:text-5xl lg:text-[56px]/[130%] tracking-[-2%] text-neutral-800">
            Our Commitment to <span className="text-primary">Information</span>{" "}
            <br className="max-lg:hidden" />
            <span className="text-primary">
              Security <span className="text-neutral-800">&</span> Quality
              Excellence
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-6 lg:w-1/3 max-lg:text-center">
          <p className="text-neutral-600 text-base md:text-lg/[150%] font-satoshi">
            We uphold strong information security and quality management
            practices to protect data, ensure compliance, and deliver
            consistent, reliable services across every project.
          </p>
          <a
            href="/contact-us.html"
            className="bg-primary md:max-lg:self-center md:w-fit text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-6 py-4 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_8px_20px_rgba(0,113,227,0.35)] hover:scale-[1.03]"
          >
            Secure Your Success
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {commits.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-neutral-50 border group border-neutral-200 rounded-3xl flex flex-col gap-4 hover:bg-card-hover hover:border-primary transition-all duration-300"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-neutral-800 font-satoshi group-hover:text-primary font-bold text-2xl/[130%] tracking-[-2%]">
                {item.title}
              </h1>
              <p className="text-neutral-600 text-base/[150%] font-satoshi ">
                {item.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-neutral-800 font-satoshi font-bold text-xl/[130%] tracking-[-2%]">
                {item.subtitle}
              </h1>
              <ul className="text-neutral-600 text-base/[150%] font-satoshi list-disc ml-6.25">
                {item.points.map((item, idx) => (
                  <li key={idx + 1}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCommitment;
