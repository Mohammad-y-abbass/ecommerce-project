import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  itemCount: number;
}

export default function CategoryCard({
  title,
  imageUrl,
  itemCount,
}: CategoryCardProps) {
  return (
    <Link href='#' className='block'>
      <div className='relative overflow-hidden bg-gray-100 aspect-square'>
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors flex flex-col justify-end p-4'>
          <h3 className='text-white font-medium text-lg'>{title}</h3>
          <p className='text-white/80 text-sm'>{itemCount} items</p>
        </div>
      </div>
    </Link>
  );
}
