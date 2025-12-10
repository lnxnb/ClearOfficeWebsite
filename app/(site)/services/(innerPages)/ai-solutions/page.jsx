import {
  boostEfficiency,
  costOptimization,
  dataIntoDecisions,
  enhanceAccuracy,
  improveSpeed,
  lowerCosts,
  manualWorkload,
  operationalVisibility,
  performance,
  predict,
  predictivePowers,
  smarterSolutions,
} from "@/public/icons";
import Image from "next/image";

export default function Page() {
  const rpaData = [
    {
      title: "Smarter Decisions",
      desc: "Leverage data-driven insights to make informed choices.",
      icon: smarterSolutions,
    },
    {
      title: "Boost Efficiency",
      desc: "AI handles complex analysis faster than manual methods.",
      icon: boostEfficiency,
    },
    {
      title: "Predictive Power",
      desc: "Anticipate trends, risks, and opportunities before they arise.",
      icon: predictivePowers,
    },
    {
      title: "Cost Optimization",
      desc: "Reduce operational waste and maximize resource utilization.",
      icon: costOptimization,
    },
  ];
  const serviceSteps = [
    {
      id: "01",
      title: "Deep Understanding of Your Processes",
      desc: "We study your workflows to identify where AI can create real value.",
    },
    {
      id: "02",
      title: "Data-Driven Architecture",
      desc: "We design models around clean, structured, and secure data foundations.",
    },
    {
      id: "03",
      title: "Iterative Development",
      desc: "AI systems are trained, tested, and refined to deliver measurable performance.",
    },
    {
      id: "04",
      title: "Seamless Integration",
      desc: "Harmonized with your existing tools, dashboards, and enterprise systems.",
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
            Our AI solutions help organizations leverage machine learning,
            natural language processing, and advanced automation to handle
            high-volume information, reduce manual analysis, and enable smarter,
            faster operations.
          </p>
        </div>
        <Image
          src={"/images/services/inner-services/solutions-1.png"}
          width={0}
          height={0}
          alt="robotic_automation"
          unoptimized
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-2xl md:text-3xl text-neutral-800">
          Why AI Solutions Matters
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
          AI Solutions Project Portfolio
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-lg md:text-xl text-neutral-800">
                Federal Energy Regulatory Commission
              </h5>
              <p className="text-sm md:text-base text-neutral-600">
                A streamlined solution that gathers, organizes, and presents
                regulatory data from FERC, allowing teams to access critical
                information quickly and make informed decisions with ease.
              </p>
            </div>
            <Image
              src={"/images/services/inner-services/solutions-2.png"}
              alt="robotic-solutions"
              width={0}
              height={0}
              unoptimized
              className="w-full h-max"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-lg md:text-xl text-neutral-800">
                RAG Powered Chatbot
              </h5>
              <p className="text-sm md:text-base text-neutral-600">
                An intelligent chatbot built on Retrieval-Augmented Generation,
                enabling accurate, context-aware responses by pulling real-time
                data from your internal knowledge sources.
              </p>
            </div>
            <Image
              src={"/images/services/inner-services/solutions-3.png"}
              alt="robotic-solutions"
              width={0}
              height={0}
              unoptimized
              className="w-full h-max"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-2xl md:text-3xl text-neutral-800">
          How We Work
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
