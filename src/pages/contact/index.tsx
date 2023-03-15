import NavHeader from "@/components/navigation/NavHeader";
import { fadeInUp, stagger } from "@/utils/animate";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function ContactPage() {
	const contactList = [
		{
			name: "Adil Hashmi",
			role: "Co-Founder",
			email: "TBD -- Email",
			imgUrl: "/contact/adil.png",
		},
		{
			name: "Zeeshan Jafri",
			role: "Co-Founder",
			email: "TBD -- Email",
			imgUrl: "/contact/zeeshan.png",
		},
	];
	return (
		<>
			<Head>
				<title>OVRA - Contact</title>
			</Head>
			<main className="mb-24">
				<NavHeader />
				<motion.section
					initial="initial"
					animate="animate"
					variants={stagger}
					className="mx-16"
				>
					<motion.h1
						variants={fadeInUp}
						className="text-9xl font-bold text-white"
					>
						CONTACT
					</motion.h1>
					<motion.div
						variants={fadeInUp}
						className="mt-24 text-5xl max-w-[42rem] pl-12"
					>
						We would love to hear from you! Get in touch.
						<span>&#129311;</span>
					</motion.div>
					<motion.div
						variants={fadeInUp}
						className="flex justify-center items-center gap-x-16 mt-20"
					>
						{contactList.map((contact) => (
							<a href={`mailto:${contact.email}`}>
								<Image
									className="rounded-[16rem]"
									src={contact.imgUrl}
									alt={contact.name}
									width={300}
									height={300}
								/>
								<div className="text-center pt-4 flex flex-col gap-y-2">
									<h2 className="text-4xl font-bold text-white">
										{contact.name}
									</h2>
									<div className="text-lg">{contact.role}</div>
									<div className="text-lg">{contact.email}</div>
									<button className="w-full py-2 my-8 font-bold text-xl light-button">
										CONTACT
									</button>
								</div>
							</a>
						))}
					</motion.div>
				</motion.section>
			</main>
		</>
	);
}
