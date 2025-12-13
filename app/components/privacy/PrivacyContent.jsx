import React from "react";

const PrivacyContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-20 xl:gap-32.5 max-w-[1536px] mx-auto px-4 xl:-mt-32">
      <div className="flex flex-col gap-8 lg:pb-32.5">
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            1. Introduction
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            We provide automation, analytics, and AI-powered solutions that help
            organizations streamline operations and make smarter decisions.
            <br /> To deliver these services, we may collect certain information
            from you.
            <br /> We respect your privacy and are committed to protecting your
            personal and business data.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%]  tracking-[-2%] text-neutral-800">
            2. Information We Collect
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            We collect information to provide and improve our services. This
            includes:
          </p>
          <div>
            <h2 className="text-neutral-600 text-base/[150%] font-bold font-satoshi">
              2.1 Information You Provide Directly
            </h2>
            <ul className="text-neutral-600 text-base/[150%] font-satoshi list-disc pl-7">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Messages or inquiries submitted via contact forms</li>
              <li>Files or data shared for project evaluation</li>
            </ul>
          </div>
          <div>
            <h2 className="text-neutral-600 text-base/[150%] font-bold font-satoshi">
              2.2 Automatically Collected Information
            </h2>
            <p className="text-neutral-600 text-base/[150%] font-satoshi ">
              When you visit our website, we may collect:
            </p>
            <ul className="text-neutral-600 text-base/[150%] pl-7 font-satoshi list-disc">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
          <div>
            <h2 className="text-neutral-600 text-base/[150%] font-bold font-satoshi">
              2.3 Project-Related Data
            </h2>
            <p className="text-neutral-600 text-base/[150%]  font-satoshi ">
              During service delivery, you may provide documents, datasets,
              credentials, or workflow information required for:
            </p>
            <ul className="text-neutral-600 text-base/[150%] pl-7 font-satoshi list-disc">
              <li>RPA development</li>
              <li>Analytics dashboards</li>
              <li>Phone number</li>
              <li>AI solution training</li>
              <li>Data processing or integration</li>
            </ul>
            <p className="text-neutral-600 text-base/[150%]  font-satoshi ">
              All project-related data remains strictly confidential.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            3. How We Use Your Information
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            We use the collected information to:
          </p>

          <ul className="text-neutral-600 text-base/[150%] pl-7 font-satoshi list-disc">
            <li>
              Provide and improve our automation, analytics, and AI services
            </li>
            <li>Respond to inquiries or support requests</li>
            <li>Deliver proposals, updates, and project communication</li>
            <li>Maintain the security of our systems</li>
            <li>Analyze website performance and improve user experience</li>
            <li>Comply with legal, contractual, or regulatory requirements</li>
          </ul>
          <p className="text-neutral-600 text-lg/[150%] font-satoshi">
            We never sell your data to third parties.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            4. How We Share Your Information
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            We may share your information only when necessary:
          </p>

          <div>
            <p className="text-neutral-600 text-base/[150%] font-satoshi">
              4.1 With Trusted Service Providers <br />
              Such as:
            </p>
            <ul className="text-neutral-600 text-base/[150%] pl-7 font-satoshi list-disc">
              <li>Hosting providers</li>
              <li>Cloud infrastructure</li>
              <li>Analytics tools</li>
              <li>Compliance or security partners</li>
            </ul>
            <p className="text-neutral-600 text-base/[150%] font-satoshi">
              They are bound by confidentiality agreements.
            </p>
          </div>

          <div>
            <p className="text-neutral-600 text-base/[150%] font-satoshi">
              4.2 Legal Requirements <br />
              We may disclose your information if required to:
            </p>
            <ul className="text-neutral-600 text-base/[150%] pl-7 font-satoshi list-disc">
              <li>Respond to legal processes</li>
              <li>Comply with regulations</li>
              <li>Protect rights, safety, or security</li>
            </ul>
          </div>

          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            4.3 Internal Teams <br />
            Information may be accessed by authorized team members on a
            need-to-know basis.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            5. Data Security
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            We follow strict Information Security Management and Quality
            Management principles, including:
          </p>

          <ul className="text-neutral-600 text-base/[150%] pl-7 font-satoshi list-disc">
            <li>Access control</li>
            <li>Data encryption</li>
            <li>Secure transmission</li>
            <li>Regular audits and monitoring</li>
            <li>Employee training</li>
            <li>Confidentiality agreements</li>
            <li>Secure storage and backups</li>
          </ul>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            We take all reasonable steps to safeguard your information from
            unauthorized access, alteration, or misuse.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            6. Data Retention
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            We retain your information only for as long as necessary to:
          </p>

          <ul className="text-neutral-600 text-base/[150%] pl-7 font-satoshi list-disc">
            <li>Provide our services</li>
            <li>Meet contractual obligations</li>
            <li>Comply with legal requirements</li>
          </ul>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            Project-related data can be deleted upon formal request.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            7. Cookies & Tracking Technologies
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            Our website may use cookies to improve:
          </p>

          <ul className="text-neutral-600 text-base/[150%] font-satoshi list-disc list-outside pl-7">
            <li>Website functionality</li>
            <li>Performance</li>
            <li>User experience</li>
            <li>Analytics</li>
          </ul>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            You can disable cookies through your browser settings at any time.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            8. Your Rights
          </h1>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            You may request:
          </p>

          <ul className="text-neutral-600 text-base/[150%] font-satoshi list-disc list-outside pl-7">
            <li>Access to your data</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your data (where legally applicable)</li>
            <li>Restriction or objection to processing</li>
          </ul>
          <p className="text-neutral-600 text-base/[150%] font-satoshi">
            Contact us if you wish to exercise any of these rights.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            9. Third-Party Links
          </h1>

          <ul className="text-neutral-600 text-base/[150%] font-satoshi list-disc list-outside pl-7">
            <li>Our website may include links to external sites.</li>
            <li>We are not responsible for their privacy practices.</li>
            <li>We recommend reviewing their policies before interacting.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi font-bold  text-xl lg:text-3xl/[130%] tracking-[-2%] text-neutral-800">
            10. Updates to This Policy
          </h1>

          <ul className="text-neutral-600 text-base/[150%] font-satoshi list-disc list-outside pl-7">
            <li>
              We may update this Privacy Policy to reflect changes in
              technology, regulations, or our service offerings.
            </li>
            <li>
              {" "}
              Any updates will be posted on this page with a revised date.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-50 border h-fit hover:border-primary max-lg:mb-12 hover:bg-[#F5F9FE] border-neutral-200 rounded-4xl p-8 lg:w-[491px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
            <div className="size-2 bg-primary rounded-full"></div>
            <h1 className="text-sm/[150%] text-primary font-satoshi">
              Get in touch
            </h1>
          </div>
          <h1 className="font-satoshi font-bold text-2xl md:text-3xl lg:text-4xl/[130%]  tracking-[-2%] text-neutral-800">
            Drop Us a <span className="text-primary"> Message</span>
          </h1>
          <p className="font-satoshi text-base/[150%]  text-neutral-600">
            We’re always happy to hear from you and will get back to you as soon
            as possible.
          </p>
        </div>
        <form className="flex flex-col gap-8 mt-8">
          <div className="flex flex-col items-center gap-8">
            <input
              type="text"
              className="py-5 px-6 w-full bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none  placeholder:text-neutral-400"
              placeholder="First Name"
            />
            <input
              type="text"
              className="py-5 px-6 w-full bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none placeholder:text-neutral-400"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="py-5 px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-full placeholder:text-neutral-400"
              placeholder="Email Address"
            />
          </div>

          <div>
            <textarea
              className="py-5 resize-none px-6 bg-white font-satoshi drop-shadow-[0_4px_20px_rgba(98,140,62,0.04)] text-base/[150%] rounded-lg border border-neutral-200 outline-none w-full placeholder:text-neutral-400"
              placeholder="Message here"
              rows={6}
            />
          </div>
          <button
            className="flex items-center justify-center gap-3 w-full self-center bg-primary backdrop-blur-xs text-base/[130%] tracking-[-2%] font-bold font-satoshi text-white px-4 py-3 rounded-full cursor-pointer  transition-all duration-300 hover:bg-primary/90
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

export default PrivacyContent;
