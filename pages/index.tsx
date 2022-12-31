import BG from "../components/BG";
import Comb from "../components/Comb";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <BG>
      <div className="flex flex-col h-full">
        <Nav />

        <Comb />
      </div>
    </BG>
  );
}
