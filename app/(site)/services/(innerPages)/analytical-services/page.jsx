import {
  dataIntoDecisions,
  enhanceAccuracy,
  improveSpeed,
  lowerCosts,
  manualWorkload,
  operationalVisibility,
  performance,
  predict,
} from "@/public/icons";
import Image from "next/image";

export default function Page() {
  const rpaData = [
    {
      title: "Turn Data Into Decisions",
      desc: "Transform raw information into clear, actionable insights that guide smarter strategies.",
      icon: dataIntoDecisions,
    },
    {
      title: "Improve Operational Visibility",
      desc: "Identify patterns, bottlenecks, and opportunities with real-time dashboards and analytics.",
      icon: operationalVisibility,
    },
    {
      title: "Enhance Performance",
      desc: "Use data-driven evaluations to optimize processes, strengthen accuracy, and boost efficiency.",
      icon: performance,
    },
    {
      title: "Predict What’s Next",
      desc: "Leverage AI-powered analytics to forecast trends, reduce risks, and stay ahead of change.",
      icon: predict,
    },
  ];
  const serviceSteps = [
    {
      id: "01",
      title: "Understand Your Data Landscape",
      desc: "We evaluate your systems, datasets, and reporting needs to establish a strong analytical foundation.",
    },
    {
      id: "02",
      title: "Design Insightful Dashboards & Models",
      desc: "Metrics and visualizations tailored to your operational goals.",
    },
    {
      id: "03",
      title: "Implement & Automate",
      desc: "From automated pipelines to insight generation, we ensure data flows seamlessly.",
    },
    {
      id: "04",
      title: "Optimize & Scale",
      desc: "We refine dashboards, enhance models, and expand analytics capabilities as your organization grows.",
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
            We turn raw data into meaningful insights that empower your
            organization to make confident, data-driven decisions. Through
            tailored dashboards, analytics automation, and AI-powered reporting,
            we help teams gain visibility, uncover patterns, and improve
            operational outcomes with clarity and precision.
          </p>
        </div>
        <Image
          src={"/images/services/inner-services/analytical-1.png"}
          width={0}
          height={0}
          alt="robotic_automation"
          unoptimized={true}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-2xl md:text-3xl text-neutral-800">
          Why Analytical Services Matters
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
          Analytical Services Project Portfolio
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-lg md:text-xl text-neutral-800">
                Business Intelligence Dashboard
              </h5>
              <p className="text-sm md:text-base text-neutral-600">
                Transform complex data into intuitive dashboards that track
                KPIs, surface trends, and simplify decision-making across teams.
              </p>
            </div>
            <Image
              src={"/images/services/inner-services/analytical-2.png"}
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
                AI Powered Analytics
              </h5>
              <p className="text-sm md:text-base text-neutral-600">
                Leverage machine learning to predict outcomes, detect anomalies,
                and automate insight generation—giving you an operational edge.
              </p>
            </div>
            <Image
              src={"/images/services/inner-services/analytical-3.png"}
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
