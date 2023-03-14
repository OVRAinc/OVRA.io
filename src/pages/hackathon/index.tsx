import NavHeader from "@/components/navigation/NavHeader";
import Head from "next/head";
import Image from "next/image";

export default function HackathonPage() {
  const sponsorsList = [
    {
      name: "heyVR.io",
      logo: "/sponsors/heyvr.jpg",
    },
    {
      name: "neurofit",
      logo: "/sponsors/neurofit.jpg",
    },
    {
      name: "webxr",
      logo: "/sponsors/webxr.jpg",
    },
  ];
  return (
    <>
      <Head>
        <title>OVRA - Hackathon</title>
      </Head>
      <main className="flex flex-col gap-y-40">
        <NavHeader />

        <section className="flex justify-center items-center w-full">
          <div>
            <h1 className="text-6xl text-white font-bold uppercase text-center max-w-[60rem]">
              Presenting OVRA&apos;s Reality Rush Hackathon
            </h1>
            <div className="text-2xl text-center">
              The First Web-Based VR Hackathon
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center w-full">
          <div>
            <h2 className="text-3xl text-center font-bold">Our Sponsors</h2>
            <div className="py-16 flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
              {sponsorsList.map((sponsor) => (
                <div className="relative min-w-[12rem]" key={sponsor.name}>
                  <div className="absolute flex justify-center items-center w-full h-full text-5xl uppercase z-[2] font-bold">
                    {sponsor.name}
                  </div>
                  <div className="absolute h-full w-full bg-black opacity-70 z-[1]" />
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={250}
                    height={250}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
