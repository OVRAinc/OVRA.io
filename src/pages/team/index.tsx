import EventCard from "@/components/cards/EventCard";
import TeamCard from "@/components/cards/TeamCard";
import NavHeader from "@/components/navigation/NavHeader";
import PageHeader from "@/components/text/PageHeader";
import { fadeInUp, stagger } from "@/utils/animate";
import { motion } from "framer-motion";
import Head from "next/head";

export default function TeamPage() {
	const TeamList = [
		{
			name: "Zeeshan Jafri",
			role: "Co-Founder",
			imgUrl: "/contact/zeeshan.png",
			email: "Zeeshanj@live.com",
		},
		{
			name: "Adil Hashmi",
			role: "Co-Founder",
			imgUrl: "/contact/adil.png",
			email: "adilhashmi.w@gmail.com",
		},
		{
			name: "Arpit Das",
			role: "Lead SWE | Corporate Exec",
			imgUrl: "/contact/arpit.png",
			email: "arpitdas226@gmail.com",
		},
		{
			name: "Dharmik Patel",
			role: "Logistics Lead",
			imgUrl: "",
			email: "dharmik1411.p@gmail.com",
		},
	];

	const pageData = {
		title: "Meet The Team",
		description: "",
	};
	return (
		<>
			<Head>
				<title>OVRA - Events</title>
			</Head>
			<main>
				<NavHeader />
				<motion.section
					initial="initial"
					animate="animate"
					variants={stagger}
					className="mx-16"
				>
					<PageHeader
						title={pageData.title}
						description={pageData.description}
					/>
					<motion.div variants={fadeInUp} className="flex justify-center items-center my-20">
						<div className="grid grid-cols-2 gap-24">
							{TeamList.map((teamMember) => (
								<TeamCard member={teamMember} key={teamMember.email} />
							))}
						</div>
					</motion.div>
				</motion.section>
			</main>
		</>
	);
}
