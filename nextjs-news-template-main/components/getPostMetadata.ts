import { PrismaClient } from "@prisma/client";
import { PostMetadata } from "./PostMetadata";

const getUserMetadata = async () => {
  const prisma = new PrismaClient();

  try {
    // Получение данных о пользователях из базы данных
    const users = await prisma.user.findMany({
      select: {
        title: true,
        date: true,
        subtitle: true,
        slug: true,
        category: true,
        author: true,
        featured_image: true,
        content: true,
      },
    });

    // Преобразование данных в формат PostMetadata (если требуется)
    return users.map((user) => ({
      title: user.title,
      date: user.date,
      subtitle: user.subtitle,
      slug: user.slug,
      category: user.category,
      author: user.author,
      featured_image: user.featured_image,
      content: user.content,
    }));
  } catch (error) {
    console.error("Ошибка при получении данных из базы:", error);
    return [];
  } finally {
    // Закрытие подключения к базе данных
    await prisma.$disconnect();
  }
};

export default getUserMetadata;
