import Link from 'next/link';
import { useRouter } from 'next/router';

import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';

export default function HomePage() {
  // return <h1 className="mt-12 text-center text-3xl font-bold">Home</h1>;
  return (
    <Link href="/blog">
      <span className="mr-2">&larr;</span>
    </Link>
  );
}

export const metadata = {
  title: 'Welcome | UcanCode',
  description: '개발을 통해 함께 성장하는 교육자입니다.',
};

// export default async function BlogPage() {
//   const allPosts = await getAllPostsFromNotion();

//   const allCategories = toUniqueArray(
//     allPosts
//       .filter((post) => post.published)
//       .map((post) => post.categories)
//       .flat()
//   ).sort();

//   return (
//     <>
//       <h1>Main 페이지</h1>

//     </>
//   );
// }
