import EventCard from "@/components/cards/EventCard";
import TeamCard from "@/components/cards/TeamCard";
import NavHeader from "@/components/navigation/NavHeader";
import PageHeader from "@/components/text/PageHeader";
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
        <section className="mx-16">
          <PageHeader
            title={pageData.title}
            description={pageData.description}
          />
          <div className="flex justify-center items-center my-20">
            <div className="grid grid-cols-2 gap-24">
              {TeamList.map((teamMember) => (
                <TeamCard member={teamMember} key={teamMember.email} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
