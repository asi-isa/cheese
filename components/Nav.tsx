import Link from "next/link";
import { IoDiamondOutline } from "react-icons/io5";

interface NavProps {}

const Nav = ({}: NavProps) => {
  return (
    <Link href="/">
      <div className="flex items-center text-2xl font-light gap-3 p-6">
        <IoDiamondOutline />
        <p>Cheese</p>
      </div>
    </Link>
  );
};

export default Nav;
