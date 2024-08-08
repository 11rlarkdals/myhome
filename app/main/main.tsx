import React from "react";
import Image from "next/image";
import MainBg from "../../public/mainBg.png";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  return (
    <div className="flex">
      <div className="bg-[url('https://i.imgur.com/diJehlF.png')] w-full h-screen bg-cover max-h-[790px] text-black flex">
        <div className=""></div>
        <div className="ml-[300px]">
          <div className="border border-black  text-center  inline-flex mt-[180px] justify-self-center p-2 pr-28 bg-white  rounded-3xl">
            국어수학 일타강사
          </div>
          <div className="font-medium">
            <div className="text-[4rem]">BIRTH CERTIFICATE</div>
            <div className="text-[4rem]">DESIGN</div>
          </div>
          <div className="mt-6 font-medium">
            <div>JUST</div>
            <div>그냥 시험봐!</div>
            <div>우린 5등급 맞을수있어요!</div>
          </div>
          <div className="flex mt-20 gap-10">
            <div className="border border-black p-5 px-12 bg-white text-[1.2rem]">
              공부 빡시게하기
            </div>
            <div className="border border-black p-5 px-12 bg-black text-white text-[1.2rem]">
              공부 포기하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
