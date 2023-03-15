import NavHeader from "@/components/navigation/NavHeader";
import PageHeader from "@/components/text/PageHeader";
import { fadeInUp, stagger } from "@/utils/animate";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function AboutPage() {
	const photoList = [
		"about_1.jpg",
		"about_2.jpg",
		"about_3.jpg",
		"about_4.jpg",
	];

	const actionList = [
		{
			head: "Hackathons",
			description:
				"The premier virtual reality (VR) hackathon organized by the Ontario Virtual Reality Association! Our event promises to be an exciting opportunity for VR enthusiasts, developers, and creators to showcase their talents and compete for a chance to win the coveted $10,000 cash prize. \n\n Our hackathon will take place in the bustling city of Toronto, Ontario, providing a vibrant backdrop for participants to collaborate and create in. We understand that food is essential to fueling creativity and productivity, which is why we will be providing meals and refreshments throughout the event. \n\n Whether you are an experienced VR developer or just starting to explore the world of VR, we welcome all skill levels and backgrounds to participate. We will be providing VR headsets to ensure that all participants have access to the necessary tools to bring their ideas to life. \n\n So, mark your calendars and get ready to immerse yourself in the exciting world of virtual reality at Virtual Rush!",
		},
		{
			head: "Promote VR",
			description:
				"To foster and facilitate collaboration in the VR/AR Space between students and firms seeking talent. We are committed to creating and showcasing high-quality VR experiences that present the unique capabilities of the technology.",
		},
		{
			head: "Create a community",
			description:
				"Creating a community for VR enthusiasts and developers is an exciting and challenging endeavor. The goal is to bring together individuals who are passionate about virtual reality technology and provide them with a platform to connect, collaborate, and share their knowledge and experiences.",
		},
	];
	const pageData = {
		title: "About us",
		description:
			"The Ontario Virtual Reality Association (OVRA) is a non-profit organization that promotes the use of virtual reality (VR) technology in Ontario, Canada.",
	};
	return (
		<>
			<Head>
				<title>OVRA - About us</title>
			</Head>
			<main>
				<NavHeader />
				<motion.section
					className="mx-16"
					initial="initial"
					animate="animate"
					variants={stagger}
				>
					<PageHeader
						title={pageData.title}
						description={pageData.description}
					/>
					<motion.div variants={fadeInUp} className="my-24">
						<div className="flex justify-between gap-x-16">
							<div className="grid grid-cols-2 gap-8">
								{photoList.map((photo, i) => (
									<Image
										src={`/about/${photo}`}
										width={350}
										height={250}
										alt={""}
									/>
								))}
							</div>
							<div className="max-w-[64rem]">
								<h2 className="text-left text-6xl font-bold uppercase pb-16">
									What are we doing?
								</h2>
								<div className="flex flex-col gap-y-10">
									{actionList.map((action) => (
										<div>
											<h3 className="text-4xl font-bold">{action.head}</h3>
											<div className="text-xl text-grey py-2 whitespace-pre-line">
												{action.description}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</motion.section>
			</main>
		</>
	);
}
