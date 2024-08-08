"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../../public/header.png";
import DropDown from "@/components/dropDown";
import Meunltem from "../../components/menultem";

interface Props {}

const header: React.FC<Props> = ({}) => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  return (
    <div>
      <div className="h-[70px] bg-white text-gray-950 p-5 flex">
        <div className="flex place-items-center">
          <h1 className="text-[25px] font-semibold">WEB</h1>
          <h6 className="content-end">SITE</h6>
        </div>
        <div className="flex mx-auto gap-12 text-[18px] border-none">
          <Meunltem title={"국어"} subMeuns={["가나다라마바사"]} />
          <div>SLEDS</div>
          <div>DANNER</div>
          <div>CONTANTS</div>
          <div>FOOTER</div>
        </div>
        <div className="flex items-center ">
          <div className="border p-2 px-7 rounded-3xl border-black">로그인</div>
        </div>
      </div>
      <Image src={Header} alt={"picture"} />
    </div>
  );
};

export default header;
