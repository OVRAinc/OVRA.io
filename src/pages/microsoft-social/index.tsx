import NavHeader from "@/components/navigation/NavHeader";
import PageHeader from "@/components/text/PageHeader";
import { fadeInUp, stagger } from "@/utils/animate";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function MicrosoftSocialPage() {
	return (
		<>
			<Head>
				<title>Microsoft social</title>
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
						title="Microsoft Social"
						description="Microsoft and the Ontario Virtual Reality Association (OVRA) have recently announced a strategic partnership to bring innovative and immersive virtual reality experiences to the forefront of technology. By combining Microsoft's cutting-edge VR technology and the expertise of the OVRA, the two organizations are set to revolutionize the way people interact with digital content."
					/>
					<motion.div
						variants={fadeInUp}
						className="flex justify-center items-center"
					>
						<Image src={"/logo.png"} width={500} height={300} alt="microsoft" />
						<div className="text-8xl">X</div>
						<Image
							src={"/hackathon/microsoft.png"}
							width={600}
							height={600}
							alt="microsoft"
						/>
					</motion.div>
					<div className="flex justify-center items-center my-20">
						<div className="text-center w-[50%]">
							<div className="text-6xl uppercase font-bold py-12">
								Our Partnership
							</div>
							<div className="text-xl">
								The partnership will focus on developing new VR applications for
								various industries, including education, healthcare, and
								entertainment. With Microsoft&apos;s advanced hardware and
								software offerings and the OVRA&apos;s deep knowledge of VR
								technology and its potential applications, this partnership is
								poised to make a significant impact on the VR industry.
								Additionally, the partnership will provide opportunities for VR
								developers in Ontario to collaborate with Microsoft and gain
								access to its VR development tools and resources. This
								collaboration will also offer a platform for VR developers to
								showcase their work and connect with other industry
								professionals.
							</div>
							<div className="pt-6 text-xl">
								We&apos;re excited to see what this partnership will bring and
								how it will help drive innovation in the VR industry. By working
								together, Microsoft and the OVRA are poised to deliver
								cutting-edge VR experiences that will shape the future of
								technology.
							</div>
						</div>
					</div>
				</motion.section>
			</main>
		</>
	);
}
