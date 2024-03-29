import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(`${base_url}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex flex-col"
        >
          <div className="flex justify-between gap-5 items-start">
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
          <div className="text-justify p-2 m-2 text-wrap break-words">
            {t.description}
          </div>
        </div>
      ))}
    </>
  );
}
