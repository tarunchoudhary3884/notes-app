import Link from "next/link";
function Navbar() {
  return (
    <div className="flex justify-between items-center bg-slate-800 px-8 py-2">
      <Link href={"/"} className="text-white font-bold">
        Notes
      </Link>
      <Link href={"/addTopic"} className="bg-white p-2 text-black">
        Add Topic
      </Link>
    </div>
  );
}

export default Navbar;
