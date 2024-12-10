import PostPreview from "@/components/PostPreview";
import getUserMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const HomePage = async () => {
  const userMetadata = await getUserMetadata(); // Асинхронное ожидание метаданных
  const postPreviews = userMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 py-5">
      {postPreviews}
    </div>
  );
};

export default HomePage;
