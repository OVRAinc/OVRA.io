import TeamCard from "@/components/cards/TeamCard";
import NavHeader from "@/components/navigation/NavHeader";
import { fadeInUp, stagger } from "@/utils/animate";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HackathonPage() {
	const sponsorsList = [
		{
			name: "heyVR.io",
			logo: "/sponsors/heyvr.jpg",
			link: "https://heyvr.io/",
		},
		{
			name: "neurofit",
			logo: "/sponsors/neurofit.jpg",
			link: "https://www.neurofit.ca/",
		},
		{
			name: "webxr",
			logo: "/sponsors/webxr.jpg",
			link: "https://immersiveweb.dev/",
		},
	];

	const judgeList = [
		{
			name: "John Doe",
			role: "President",
			profilePicture: "/john_doe.png",
			email: "temp@hotmail.com",
		},
		{
			name: "John Doe",
			role: "President",
			profilePicture: "/john_doe.png",
			email: "temp@hotmail.com",
		},
		{
			name: "John Doe",
			role: "President",
			profilePicture: "/john_doe.png",
			email: "temp@hotmail.com",
		},
		{
			name: "John Doe",
			role: "President",
			profilePicture: "/john_doe.png",
			email: "temp@hotmail.com",
		},
	];
	return (
		<>
			<Head>
				<title>OVRA - Hackathon</title>
			</Head>
			<motion.main
				initial="initial"
				animate="animate"
				variants={stagger}
				className="flex flex-col gap-y-40"
			>
				<NavHeader />

				<section className="flex justify-center items-center w-full">
					<div>
						<motion.h1
							variants={fadeInUp}
							className="text-6xl text-white font-bold uppercase text-center max-w-[60rem] border-b-2 py-4"
						>
							Presenting OVRA&apos;s Reality Rush Hackathon
						</motion.h1>
						<motion.div
							variants={fadeInUp}
							className="text-2xl text-center py-4"
						>
							The First Web-Based VR Hackathon
						</motion.div>
					</div>
				</section>
				<motion.section
					variants={fadeInUp}
					className="flex justify-center items-center w-full"
				>
					<div>
						<h2 className="text-3xl text-center font-bold">Our Sponsors</h2>
						<div className="py-16 flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
							{sponsorsList.map((sponsor) => (
								<a
									target="_blank"
									href={sponsor.link}
									className="relative min-w-[12rem]"
									key={sponsor.name}
								>
									<div className="absolute flex justify-center items-center w-full h-full text-5xl uppercase z-[2] font-bold">
										{sponsor.name}
									</div>
									<div className="absolute h-full w-full bg-black opacity-70 z-[1]" />
									<Image
										src={sponsor.logo}
										alt={sponsor.name}
										width={250}
										height={250}
									/>
								</a>
							))}
						</div>
					</div>
				</motion.section>
				<section>
					<div>
						<h2 className="text-3xl text-center font-bold">Our Judges</h2>
						<div className="text-9xl text-center font-bold text-[#2b2427] my-16">
							TBD
						</div>
						{/* <div className="py-16 flex flex-wrap justify-center items-center gap-x-16 gap-y-24">
              {judgeList.map((sponsor) => (
                <TeamCard member={sponsor} key={sponsor.email} />
              ))}
            </div> */}
					</div>
				</section>
			</motion.main>
		</>
	);
}
