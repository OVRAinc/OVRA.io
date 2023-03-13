import Link from "next/link";

export default function NavBlock({
	name,
	route,
}: {
	name: string;
	route: string;
}) {
	return (
		<Link href={route}>
			<div className="text-lg">{name}</div>
		</Link>
	);
}
