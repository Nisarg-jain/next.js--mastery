// src/app/photos--feed/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { wondersImages, WonderImage } from '../wonders';

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

  if (!photo) {
    return <div className="p-8 text-center text-xl">Photo not found</div>;
  }

  return (
    <div className="container mx-auto my-10 max-w-xl p-4 space-y-4">
      <Link
        href="/photos--feed"
        className="text-sm font-semibold text-blue-600 hover:underline inline-block"
      >
        ← Back to Feed
      </Link>
      <h1 className="text-3xl font-bold text-gray-900">{photo.name}</h1>
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg">
        <Image
          alt={photo.name}
          src={photo.src}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <h3 className="font-semibold text-gray-800">{photo.photographer}</h3>
        <p className="text-sm text-gray-500 mt-1">📍 {photo.location}</p>
      </div>
    </div>
  );
}