import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/home">Home</Link>
      <Link href="/admin">Admin</Link>
    </main>
  );
}
