import React from "react";

interface Props {
  title: string;
  subMeuns: string[];
}

const Page: React.FC<Props> = ({ title, subMeuns }) => {
  const array = ["읽기", "쓰기", "독해"];
  return (
    <div>
      {title}
      <div>
        {array.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Page;
