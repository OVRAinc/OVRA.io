import EventCard from "@/components/cards/EventCard";
import NavHeader from "@/components/navigation/NavHeader";
import PageHeader from "@/components/text/PageHeader";
import { fadeInUp, stagger } from "@/utils/animate";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function EventPage() {
	const currentEvents = [
		{
			id: 0,
			title: "VR/AR in Education",
			date: "2021-10-01",
			description:
				"A conference for educators to learn about VR/AR in the classroom.",
		},
		{
			id: 1,
			title: "VR/AR in Education",
			date: "2021-10-01",
			description:
				"A conference for educators to learn about VR/AR in the classroom.",
		},
		{
			id: 2,
			title: "VR/AR in Education",
			date: "2021-10-01",
			description:
				"A conference for educators to learn about VR/AR in the classroom.",
		},
	];
	const pageData = {
		title: "Events",
		description:
			" Connect and engage with members in the virtual reality community through a variety of events, including workshops, meetups, and networking opportunities.",
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
					<div>
						<PageHeader
							title={pageData.title}
							description={pageData.description}
						/>
					</div>
					<motion.div variants={fadeInUp} className="relative mt-16">
						<div className="absolute flex flex-col gap-y-8">
							{currentEvents.map((event) => (
								<EventCard event={event} key={event.id} />
							))}
						</div>
					</motion.div>
				</motion.section>
			</main>
		</>
	);
}
