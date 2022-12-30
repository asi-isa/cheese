import { IoDiamondOutline } from "react-icons/io5";

import BG from "../components/BG";
import Comb from "../components/Comb";

export default function Home() {
  return (
    <BG>
      <div className="flex flex-col h-full">
        <div className="flex items-center text-2xl font-light gap-3 p-6">
          <IoDiamondOutline />
          <p>Cheese</p>
        </div>

        <Comb />
      </div>
    </BG>
  );
}
