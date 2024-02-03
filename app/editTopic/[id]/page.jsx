import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const res = await fetch(`${base_url}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
