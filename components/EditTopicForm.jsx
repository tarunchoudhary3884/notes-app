import React from "react";

function EditTopicForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Topic Title"
        className=" border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Topic Description"
        className=" border border-slate-500 px-8 py-2"
      />
      <button className="font-bold px-6 py-3 w-fit bg-green-600 text-white">
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
