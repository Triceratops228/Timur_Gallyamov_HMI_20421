import Link from "next/link";
import Image from "next/image";
import getUserMetadata from "@/components/getPostMetadata";

interface PostPreviewProps {
  slug: string;
}

const PostPreview = async ({ slug }: PostPreviewProps) => {
  // Получение данных о посте из базы по `slug`
  const posts = await getUserMetadata();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4 transition duration-200 transform hover:translate-y-2">
      <div className="hover:opacity-80">
        <Link href={`/${post.slug}`}>
          {post.featured_image ? (
            <Image
              src={post.featured_image}
              alt={post.title}
              width={800}
              height={400}
            />
          ) : (
            <div className="bg-gray-200 w-full h-40 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <h4 className="font-bold text-lg pt-2 tracking-wide">{post.title}</h4>
        </Link>
      </div>
      <div className="flex">
        <p className="text-sm pt-3 tracking-wider font-medium pr-1">By</p>
        <p className="text-sm pt-3 text-[#e53170] tracking-wider font-semibold">
          {post.author}
        </p>
      </div>
      <p className="text-sm pt-3 text-gray-600 tracking-wider">
        {post.subtitle}
      </p>
    </div>
  );
};

export default PostPreview;
