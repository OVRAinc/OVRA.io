import Head from "next/head";
import Link from "next/link";

export default function FallbackPage() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <main className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-[15rem]">404</h1>
          <Link
            href="/"
            className="text-xl tracking-widest border-2 border-white py-4 px-12 light-button"
          >
            GO HOME
          </Link>
        </div>
      </main>
    </>
  );
}
