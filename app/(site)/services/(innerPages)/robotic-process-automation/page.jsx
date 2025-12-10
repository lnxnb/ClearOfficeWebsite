import {
  enhanceAccuracy,
  improveSpeed,
  lowerCosts,
  manualWorkload,
} from "@/public/icons";
import Image from "next/image";

export default function Page() {
  const rpaData = [
    {
      title: "Reduce Manual Workload",
      desc: "Free your team from repetitive tasks.",
      icon: manualWorkload,
    },
    {
      title: "Improve Speed",
      desc: "Complete complex processes in minutes, not hours.",
      icon: improveSpeed,
    },
    {
      title: "Enhance Accuracy",
      desc: "Automated workflows eliminate human error.",
      icon: enhanceAccuracy,
    },
    {
      title: "Lower Costs",
      desc: "Scale your operations without increasing staff.",
      icon: lowerCosts,
    },
  ];
  const serviceSteps = [
    {
      id: "01",
      title: "Process Assessment",
      desc: "We evaluate your workflows, identify automation candidates, and map opportunities for optimization.",
    },
    {
      id: "02",
      title: "Automation Design",
      desc: "Our team builds logic-driven automation models tailored to your operational rules.",
    },
    {
      id: "03",
      title: "Deployment & Integration",
      desc: "Seamless rollout with minimal disruption to your existing tools and systems.",
    },
    {
      id: "04",
      title: "Testing & Validation",
      desc: "Thorough QA ensures reliability, accuracy, and compliance.",
    },
    {
      id: "05",
      title: "Monitoring & Optimization",
      desc: "We continuously refine your automations for speed, accuracy, and long-term performance.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl md:text-3xl text-neutral-800">
            About This Service
          </h3>
          <p className="text-base md:text-lg text-neutral-600">
            We help organizations eliminate repetitive, rule-based tasks by
            deploying intelligent automation that increases accuracy, reduces
            operational costs, and accelerates turnaround times. Our RPA
            solutions integrate seamlessly with your existing systems, enabling
            your teams to focus on high-value work instead of manual processing.
          </p>
        </div>
        <Image
          src={"/images/services/inner-services/robotic-1.png"}
          width={0}
          height={0}
          alt="robotic_automation"
          unoptimized={true}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-2xl md:text-3xl text-neutral-800">
          Why RPA Matters
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {rpaData.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="flex gap-2 w-full pb-4 border-b border-neutral-200"
              >
                <span>{item.icon}</span>
                <div className="flex flex-col gap-2">
                  <h5 className="font-bold text-lg md:text-xl text-neutral-800">
                    {item.title}
                  </h5>
                  <p className="text-sm md:text-base text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {rpaData.slice(2).map((item, idx) => (
              <div
                key={idx}
                className="flex gap-2 w-full max-md:pt-4 max-md:border-t border-neutral-200 max-md:first:border-none"
              >
                <span>{item.icon}</span>
                <div className="flex flex-col gap-2">
                  <h5 className="font-bold text-lg md:text-xl text-neutral-800">
                    {item.title}
                  </h5>
                  <p className="text-sm md:text-base text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl md:text-3xl text-neutral-800">
          RPA Project Portfolio
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-lg md:text-xl text-neutral-800">
                USPTO Processor
              </h5>
              <p className="text-sm md:text-base text-neutral-600">
                A specialized automation tool designed to extract, process, and
                organize USPTO-related documents with precision. It drastically
                reduces manual review time and ensures compliance, accuracy, and
                consistent formatting for intellectual property workflows.
              </p>
            </div>
            <Image
              src={"/images/services/inner-services/robotic-2.png"}
              alt="robotic-solutions"
              width={0}
              height={0}
              unoptimized={true}
              className="w-full h-max"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-lg md:text-xl text-neutral-800">
                Routine Document Generator
              </h5>
              <p className="text-sm md:text-base text-neutral-600">
                An automation module that generates frequently used internal and
                client-facing documents. With predefined templates and smart
                data mapping, this tool streamlines routine paperwork, minimizes
                errors, and increases document turnaround speed.
              </p>
            </div>
            <Image
              src={"/images/services/inner-services/robotic-3.png"}
              alt="robotic-solutions"
              width={0}
              height={0}
              unoptimized={true}
              className="w-full h-max"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-2xl md:text-3xl text-neutral-800">
          Our Approach to Automation
        </h3>
        <div className="flex flex-col gap-4">
          {serviceSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50 group hover:bg-[#F5F9FE] hover:border-primary transition-all ease-in-out duration-300 flex gap-2"
            >
              <span className="font-light text-4xl text-neutral-400 group-hover:text-primary font-satoshi">
                {item.id}
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg md:text-xl text-neutral-800 group-hover:text-primary transition-all ease-in-out duration-300">
                  {item.title}
                </p>
                <span className="text-base text-neutral-600 transition-all ease-in-out duration-300">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
