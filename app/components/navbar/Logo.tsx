"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer -ml-20"
      height="150"
      width="150"
      src={"/images/havvn.svg"}
    />
  );
}

export default Logo;
