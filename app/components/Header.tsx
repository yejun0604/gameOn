"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegUser } from "react-icons/fa"; // <FaRegUser />
import { IoCreateOutline } from "react-icons/io5"; // <IoCreateOutline />
const USER_IMAGE = "/assets/userimage.jpeg";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log("Session", session); // log data
  return (
    <div className="flex justify-between p-2 border-b-[2px] border-[#FF3366]">
      <img
        src="/assets/logo.jpeg"
        alt="logo"
        className="w-20 h-10  hover:cursor-pointer"
        onClick={() => router.push("./")}
      />

      <div className="flex gap-3">
        {/*CREATE POST BUTTON */}
        <button
          onClick={() => router.push("/createPost")}
          className="bg-black text-white p-2 px-3 rounded-full"
        >
          <span className="hidden sm:block">CREATE POST</span>
          <IoCreateOutline className="sm:hidden text-[20px]" />
        </button>

        {/* SIGN IN/OUT BUTTON */}
        {!session ? (
          <button
            className="bg-white text-gray-500 p-2 px-3 rounded-full border-[1px]"
            onClick={() => signIn()}
          >
            <span className="hidden sm:block">SIGN IN</span>
            <FaRegUser className="sm:hidden text-[20px]" />
          </button>
        ) : (
          <button
            className="bg-white text-grey-500 p-2 px-3 rounded-full border-[1px]"
            onClick={() => signOut({ callbackUrl: "" })}
          >
            <span className="hidden sm:block">SIGN OUT</span>
            <FaRegUser className="sm:hidden text-[20px]" />
          </button>
        )}

        <Image
          src={session ? session?.user?.image : USER_IMAGE}
          alt="user image"
          width={40}
          height={40}
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
