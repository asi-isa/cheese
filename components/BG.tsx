import { ReactNode } from "react";
import Image from "next/image";

import bg from "../public/bg.jpg";

import bg_sm from "../public/bg_small.jpg";

interface BGProps {
  children: ReactNode;
}

const BG = ({ children }: BGProps) => {
  return (
    <div className="">
      <Image src={bg} alt="" fill className="object-cover" placeholder="blur" />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-md">
        {children}
      </div>
    </div>
  );
};

export default BG;
