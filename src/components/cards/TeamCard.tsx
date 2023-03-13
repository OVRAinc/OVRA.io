import { Member } from "@/@types/Member";
import Image from "next/image";

export default function TeamCard({ member }: { member: Member }) {
	return (
		<div className="w-[18rem] h-[12rem] bg-purple-tint relative">
			<div className="flex justify-center w-full">
				<Image
					className="mt-[-2rem]"
					src="/pfp.png"
					alt="Profile Picture"
					width={100}
					height={100}
				/>
			</div>
			<div className="text-center pt-4 text-lg">
				<div>{member.name}</div>
				<div>{member.role}</div>
				<div>{member.email}</div>
			</div>
		</div>
	);
}
