import EventCard from "@/components/cards/EventCard";
import TeamCard from "@/components/cards/TeamCard";
import NavHeader from "@/components/navigation/NavHeader";
import Head from "next/head";

export default function TeamPage() {
	const TeamList = [
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
				<title>OVRA - Events</title>
			</Head>
			<main>
				<NavHeader />
				<section className="mt-20">
					<h1 className="text-center text-6xl font-bold">MEET THE TEAM</h1>
					<div className="flex justify-center items-center mt-20">
						<div className="grid grid-cols-2 gap-24">
							{TeamList.map((teamMember) => (
								<TeamCard member={teamMember} key={teamMember.email}/>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
