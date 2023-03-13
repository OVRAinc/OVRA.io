import EventCard from "@/components/cards/EventCard";
import NavHeader from "@/components/navigation/NavHeader";
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
	return (
		<>
			<Head>
				<title>OVRA - Events</title>
			</Head>
			<main>
				<NavHeader />
				<section className="flex justify-center items-center gap-x-24 mt-20">
					<div>
						<h1 className="text-8xl font-bold">Events</h1>
						<div className="text-lg w-[40rem] pt-4">
							Welcome to the events section of the Ontario Virtual Reality
							Association (OVRA). Our goal is to connect and engage members of
							the virtual reality community through a variety of events,
							including workshops, meetups, and networking opportunities. We
							strive to provide a platform for our members to learn from
							industry leaders, share their knowledge and experiences, and
							collaborate on projects. Keep an eye on this page for updates on
							upcoming events and to register for our next event. We look
							forward to connecting with you!
						</div>
					</div>
					<div className="relative">
						<div className="absolute flex flex-col gap-y-8">
							{currentEvents.map((event) => (
								<EventCard event={event} key={event.id}/>
							))}
						</div>
						<Image
							src="/green_blob.png"
							alt="OVRA Logo"
							width={500}
							height={100}
						/>
					</div>
				</section>
			</main>
		</>
	);
}
