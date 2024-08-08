"use client";
import React from "react";
import Meunltem from "../../components/menultem";
import { title } from "process";

interface Props {
  title: string;
}

const Page: React.FC<Props> = ({}) => {
  return (
    <div>
      <Meunltem title="국어" subMeuns={["reading", "writing", "essay"]} />
    </div>
  );
};

export default Page;
