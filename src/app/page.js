import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center sm:items-start">
        <h1 className="text-5xl">NextAuth App</h1>
        <Link href="/register"><button className="bg-cyan-500 px-6 py-2">Register</button></Link>
      </main>
      
    </div>
  );
}
