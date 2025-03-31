import Image from 'next/image';
import { Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface TestimonialCardProps {
  name: string;
  role: string;
  imageUrl: string;
  rating: number;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  role,
  imageUrl,
  rating,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className='bg-white p-8 rounded-none border border-gray-200'>
      <div className='flex items-start gap-4 mb-6'>
        <FormatQuoteIcon sx={{ fontSize: 40, color: '#000', opacity: 0.1 }} />
      </div>

      <p className='text-gray-700 italic mb-6 leading-relaxed'>{testimonial}</p>

      <div className='flex items-center gap-4'>
        <div className='relative h-12 w-12 rounded-full overflow-hidden'>
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={name}
            fill
            className='object-cover'
          />
        </div>
        <div>
          <h4 className='font-medium'>{name}</h4>
          <p className='text-sm text-gray-500'>{role}</p>
        </div>
      </div>

      <div className='mt-4'>
        <Rating value={rating} precision={0.5} size='small' readOnly />
      </div>
    </div>
  );
}
