import Image from "next/image";
import Link from "next/link";
import NavBlock from "./NavBlock";

export default function NavHeader() {
	const menuItems = [
		{
			name: "About us",
			link: "/about",
		},
		{
			name: "Events",
			link: "/events",
		},
		{
			name: "Contact",
			link: "/contact",
		},
		{
			name: "Meet the team",
			link: "/team",
		},
	];
	return (
		<header className="flex justify-between p-4 items-center">
			{/* Image */}
			<Link href="/">
				<Image src="/logo.png" alt="OVRA Logo" width={75} height={50} />
			</Link>
			{/* Menu items */}
			<div className="flex no-wrap gap-x-16 pr-24">
				{menuItems.map((item) => (
					<NavBlock name={item.name} route={item.link} />
				))}
			</div>
		</header>
	);
}
