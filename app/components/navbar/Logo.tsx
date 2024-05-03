"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      onClick={() => router.push("/")}
      className=" -ml-8 cursor-pointer"
      height="150"
      width="150"
      src={"/images/havvn.svg"}
    />
  );
}

export default Logo;
