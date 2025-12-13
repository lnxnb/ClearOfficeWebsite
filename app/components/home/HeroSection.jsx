"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
	{
		id: 1,
		highlight: "Automation",
		desc: "ClearOffice designs and deploys practical AI, analytics, and workflow automation to reduce manual work, improve accuracy, and accelerate decisions—without disrupting operations.",
		img: "/images/home/slide-1.webp",
	},
	{
		id: 2,
		highlight: "Artificial Intelligence",
		desc: "ClearOffice designs and deploys practical AI, analytics, and workflow automation to reduce manual work, improve accuracy, and accelerate decisions—without disrupting operations.",
		img: "/images/home/slide-2.webp",
	},
	{
		id: 3,
		highlight: "Analytics",
		desc: "ClearOffice designs and deploys practical AI, analytics, and workflow automation to reduce manual work, improve accuracy, and accelerate decisions—without disrupting operations.",
		img: "/images/home/slide-3.webp",
	},
];

const HeroSection = () => {
	const [current, setCurrent] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				const next = prev + 0.6;
				if (next >= 100) return 100;
				return next;
			});
		}, 50);

		return () => clearInterval(interval);
	}, [current]);

	useEffect(() => {
		if (progress >= 100) {
			setCurrent((prev) => (prev + 1) % slides.length);
			setProgress(0);
		}
	}, [progress]);

	return (
		<>
			<div className="pt-4 md:pt-6 lg:pt-8 relative xl:pt-12 w-full lg:min-h-[calc(100vh-180px)] xl:min-h-[calc(100vh-240px)] overflow-hidden flex flex-col justify-between pointer-events-none">
				<div>
					{/* SLIDE STACK */}
					<div className="absolute inset-0 -z-12">
						{slides.map((s, i) => (
							<motion.div
								key={s.id}
								className="absolute inset-0"
								style={{
									backgroundImage: `url(${s.img})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									backgroundPosition: "center",
									zIndex: i === current ? 2 : 1,
								}}
								initial={{ opacity: i === current ? 1 : 0 }}
								animate={{ opacity: i === current ? 1 : 0 }}
								transition={{
									duration: 1.0,
									ease: "easeInOut",
								}}
							>
								<div
									className="
                absolute inset-0 
                bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.95)_100%)]
                before:content-[''] before:absolute before:inset-0
                before:bg-[linear-gradient(90deg,rgba(0,113,227,0.25)_0%,rgba(0,113,227,0)_100%)]
                mix-blend-normal backdrop-blur-sm
              "
								></div>
							</motion.div>
						))}
					</div>

					<div className="relative max-w-[1536px] mx-auto z-10">
						<div className="flex flex-col gap-6 px-4">
							<div className="max-md:flex max-md:justify-center max-md:items-center">
								<div className="flex items-center max-md:justify-center gap-2 px-3 py-1.5 border backdrop-blur-lg bg-white/5 border-white/20 rounded-[48px] w-fit">
									<div className="md:size-4 size-3 bg-primary rounded-full"></div>
									<h1 className="font-medium text-sm md:text-xl/[140%] text-white font-general">
										Practical AI for Modern Operations
									</h1>
								</div>
							</div>
							<div className="max-md:text-center">
								<div className="relative h-14 md:h-[110px] -mb-1 md:-mb-3">
									{slides.map((s, i) => (
										<motion.h1
											key={s.id}
											className="text-primary font-satoshi font-bold text-5xl md:text-5xl lg:text-6xl xl:text-[80px]/[120%] tracking-[-2%] absolute inset-0"
											style={{ zIndex: i === current ? 2 : 1 }}
											initial={{ opacity: i === current ? 1 : 0 }}
											animate={{ opacity: i === current ? 1 : 0 }}
											transition={{ duration: 0.8, ease: "easeInOut" }}
										>
											{s.highlight}
										</motion.h1>
									))}
								</div>
								<h1 className="text-white font-satoshi font-light text-5xl/[130%] md:text-5xl lg:text-6xl xl:text-[80px]/[120%] tracking-[-2%]">
									that moves the needle
								</h1>
							</div>
							<AnimatePresence mode="wait">
								{slides[current].highlight.split(" ").length > 1 && (
									<motion.div
										key={`space-${current}`}
										className="h-0.5 md:hidden"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.3 }}
									/>
								)}
							</AnimatePresence>
							<p className="text-white text-xl/[140%] font-general lg:w-3/5 max-md:text-center xl:-mt-8">
								ClearOffice designs and deploys practical AI, analytics, and
								workflow automation to reduce manual work, improve accuracy, and
								accelerate decisions—without disrupting operations.
							</p>

							<div className="flex flex-col gap-1.5 md:w-fit">
								<a
									href="/contact-us.html"
									className="!pointer-events-auto bg-primary md:w-fit text-center text-lg/[130%] cursor-pointer font-bold text-white px-5 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
								>
									Get a tailored AI roadmap
								</a>
								<a
									href="/industries-served.html"
									className="!pointer-events-auto bg-white md:w-fit text-center text-base/[130%] cursor-pointer font-semibold text-primary px-5 py-3 rounded-full transition-all duration-300 hover:scale-[1.03]"
								>
									See use cases
								</a>
							</div>
							<div className="hidden md:block md:h-3"></div>
						</div>
					</div>
				</div>
				{/* BOTTOM BARS */}
				<div className="max-lg:mt-8 !pointer-events-auto">
					<div className="grid grid-cols-3 border-t border-white/20">
						{slides.map((s, i) => (
							<div
								key={s.id}
								onClick={() => {
									setCurrent(i);
									setProgress(0);
								}}
								className="cursor-pointer"
							>
								<div
									className={`relative h-1 w-full overflow-hidden  ${
										i === current && "bg-light-blue"
									}`}
								>
									<motion.div
										initial={{ width: "0%" }}
										animate={{ width: i === current ? `${progress}%` : "0%" }}
										transition={{
											duration: 0.1,
											ease: "linear",
										}}
										className={`h-1 bg-primary ${i !== current && "invisible"}`}
									/>
								</div>

								<div
									className={`flex max-md:flex-col-reverse items-center backdrop-blur-lg border-l border-white/20 md:p-4 max-md:pb-2 ${
										i === current ? "bg-primary/20" : "bg-white/5"
									}`}
								>
									<h1 className="text-white font-satoshi font-bold text-sm md:text-base/[130%] flex-1">
										{s.highlight}
									</h1>
									<h2 className="text-white font-satoshi font-light text-lg md:text-3xl/[140%]">
										{i + 1 < 10 ? `0${i + 1}` : i + 1}
									</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
