import Link from "next/link";
import React from "react";

interface Props {}

const DropDown: React.FC<Props> = ({}) => {
  return (
    <div className="text-black bg-white p-4   rounded-lg f mr-[940px]">
      <div>동사</div>
      <div>명사</div>
      <div>쏼랴쏼랴 </div>
    </div>
  );
};

export default DropDown;
