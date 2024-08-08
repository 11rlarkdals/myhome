"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../../public/header.png";
import Meunltem from "../../components/menultem"; // 컴포넌트 이름을 수정했습니다.

interface Props {}

const header: React.FC<Props> = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  return (
    <div>
      <div className="h-[70px] bg-white text-gray-950 p-5 flex">
        <div className="flex place-items-center">
          <h1 className="text-[25px] font-semibold">WEB</h1>
          <h6 className="content-end">SITE</h6>
        </div>
        <div className="flex mx-auto gap-24 text-[18px] border-none">
          <Meunltem
            title="국어"
            subMenus={[{ title: "가나다라마바사", href: "/rnrdj" }]}
          />
          <Meunltem
            title="영어"
            subMenus={[{ title: "너 영어좀치냐", href: "/duddj" }]}
          />
          <Meunltem
            title="수학"
            subMenus={[{ title: "1+1 = 귀요미", href: "/math" }]}
          />
          <Meunltem
            title="사회"
            subMenus={[{ title: "사회썜 재미없어", href: "/society" }]}
          />
          <Meunltem
            title="과학"
            subMenus={[{ title: "생태계 어쩌구저쩌구", href: "/science" }]}
          />
        </div>
        <div className="flex items-center">
          <div className="border p-2 px-7 rounded-3xl border-black">로그인</div>
        </div>
      </div>
      {/* <Image src={Header} alt={"picture"} /> */}
    </div>
  );
};

export default header;
