import Image from "next/image";
import Link from "next/link";
import SignUp from "./(auth)/sign-up/page";

export default function Home() {
  return <div className="bg-[#DCF7EE] w-full h-full">Hello
  <Link href="/sign-up">Hello</Link>
  </div>;
}
