import Link from "next/link";
import React, { useState } from "react";

interface Props {
  title: string;
  subMenus: { title: string; href: string }[]; // subMenus를 객체 배열로 수정
}

const Page: React.FC<Props> = ({ title, subMenus }) => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() => {
          setIsMenuShow(!isMenuShow);
        }}
      >
        {title}
      </div>
      <div>
        {subMenus.map((menu, index) => (
          <Link
            key={index}
            className={`${
              !isMenuShow && "hidden"
            } absolute text-black font-bold top-17 bg-white place-self-center py-10 px-4 rounded-lg mr-[1300px]`}
            href={menu.href}
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
