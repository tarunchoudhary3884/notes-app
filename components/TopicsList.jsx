import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
function TopicsList() {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
      <div>
        <h2 className="font-bold text-2xl">Topic Title</h2>
        <div>Topic Description</div>
      </div>
      <div className="flex gap-2 items-start">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}

export default TopicsList;
