// src/app/photos--feed/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { wondersImages } from './wonders';

export default function PhotoFeed() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-center text-3xl font-bold my-6">
        New 7 Wonders of the World
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wondersImages.map(({ id, name, src }) => (
          <Link key={id} href={`/photos--feed/${id}`}>
            <div className="overflow-hidden rounded-xl aspect-square relative hover:scale-[1.02] transition-transform duration-200 shadow-sm hover:shadow-md cursor-pointer">
              <Image
                alt={name}
                src={src}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}