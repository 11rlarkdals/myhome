import React from "react";
import Header from "./header/header";
import Meunltem from "../components/menultem";
import Main from "./main/main";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Page;
