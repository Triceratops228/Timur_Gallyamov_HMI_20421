import Markdown from "markdown-to-jsx";
import getUserMetadata from "@/components/getPostMetadata";
import Image from "next/image";

const getPostContent = async (slug: string) => {
  const posts = await getUserMetadata(); // Получаем все записи
  const post = posts.find((post) => post.slug === slug); // Ищем запись по slug
  return post || null; // Возвращаем найденный пост или null
};

export const generateStaticParams = async () => {
  const posts = await getUserMetadata(); // Асинхронно получаем метаданные
  return posts.map((post) => ({
    slug: post.slug, // Формируем массив объектов параметров
  }));
};

async function PostPage(props: any) {
  const slug = props.params.slug;
  const post = await getPostContent(slug); // Асинхронное получение содержимого поста

  if (!post) {
    // Если пост не найден, показываем страницу 404
    return (
      <div className="py-5">
        <h1 className="text-center mb-5 title">404: This Page Doesn't Exist</h1>
        <article className="text-center article">
          Go to homepage to find latest articles!
        </article>
      </div>
    );
  }

  return (
    <div className="mx-4 my-10">
      <div className="my-2 text-center px-1 font-semibold text-[#e53170] text-base md:text-lg tracking-wide">
        <span className="flex justify-center">
            <div className="pr-4">
              News
            </div>
        </span>
      </div>
      <h1 className="text-black text-center text-3xl md:text-4xl font-extrabold">
        {post.title}
      </h1>
      <div className="text-gray-600 text-base md:text-lg font-medium text-center my-3">
        <span>{post.subtitle}</span>
      </div>
      <article className="article">
        {post.featured_image && (
          <figure>
            <Image
              src={post.featured_image}
              alt={post.title}
              width={800}
              height={480}
              priority
            />
          </figure>
        )}
        <div className="flex justify-center my-4">
          <div className="font-medium text-gray-600 text-base md:text-lg tracking-wide">
            By
          </div>
          <div className="px-1 font-semibold text-[#e53170] text-base md:text-lg tracking-wide">
            {post.author}
          </div>
          <div className="font-medium text-base md:text-lg text-gray-600 tracking-wide">
            & Published on {post.date}
          </div>
        </div>
        <div className="prose md:prose-xl">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </div>
  );
}

export default PostPage;
