import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn() {
  return (
    <button>
      <HiOutlineTrash className="text-2xl text-red-700" />
    </button>
  );
}

export default RemoveBtn;
