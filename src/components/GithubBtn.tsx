import { Link2 } from "lucide-react";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link href={"https://www.alavanweb.com"} target="blank" className=" animate-pulse absolute left-0 bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none ">
      <Link2 />
      <span className="font-rubik text-2xl max-sm:text-xl">AlavanWeb</span>
    </Link>
  );
};

export default GithubBtn;
