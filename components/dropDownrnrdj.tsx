"use client";
import React, { useState } from "react";
import DropDown from "./dropDown";

interface Props {}

function Page({}) {
  const [isMenuShow, setIsMenuShow] = useState(false);
  return;
  <div>
    <div
      onClick={() => {
        setIsMenuShow(!isMenuShow);
      }}
    >
      <div className="hover:cursor-pointer">국어</div>
    </div>
    <div className={`${!isMenuShow && "hidden"} absolute right-0 top-[75px]`}>
      <DropDown />
    </div>
    ;
  </div>;
}

export default Page;
