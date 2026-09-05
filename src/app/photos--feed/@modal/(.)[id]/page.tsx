import Image from 'next/image';
import Modal from '@/components/modal';
import { wondersImages, WonderImage } from '../../wonders';

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

  if (!photo) {
    return null;
  }

  return (
    <Modal>
      <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4">
        <Image
          alt={photo.name}
          src={photo.src}
          fill
          sizes="500px"
          className="object-cover"
        />
      </div>
      <div className="text-left">
        <h2 className="text-xl font-bold text-gray-900">{photo.name}</h2>
        <p className="text-sm text-gray-600 mt-1">{photo.photographer}</p>
        <p className="text-xs text-gray-400 mt-0.5">📍 {photo.location}</p>
      </div>
    </Modal>
  );
}