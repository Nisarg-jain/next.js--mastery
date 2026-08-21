import Link from 'next/link';

export default function BlogPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Tech Blog</h1>
      <p className="text-gray-600">Read our latest architectural insights and guides.</p>
      
      <ul className="space-y-2 pt-4">
        <li>
          <Link href="/blog/first" className="text-blue-600 hover:underline font-medium">
            → Read First Blog Post
          </Link>
        </li>
        <li>
          <Link href="/blog/second" className="text-blue-600 hover:underline font-medium">
            → Read Second Blog Post
          </Link>
        </li>
      </ul>
    </section>
  );
}