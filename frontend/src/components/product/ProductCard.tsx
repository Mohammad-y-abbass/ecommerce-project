import Image from 'next/image';
import { Button, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  isNew?: boolean;
}

export default function ProductCard({
  title,
  price,
  imageUrl,
  rating,
  reviewCount,
  discount,
  isNew,
}: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className='group'>
      <div className='relative overflow-hidden mb-4'>
        <div className='aspect-[3/4] relative bg-gray-100'>
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={title}
            fill
            className='object-cover'
          />
        </div>

        {/* Overlay with actions */}
        <div className='absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3'>
          <button className='bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors'>
            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
          </button>
          <button className='bg-black p-3 rounded-full shadow-md hover:bg-gray-900 transition-colors'>
            <ShoppingCartIcon sx={{ fontSize: 20, color: 'white' }} />
          </button>
        </div>

        {/* Labels */}
        <div className='absolute top-3 left-3 flex flex-col gap-2'>
          {isNew && (
            <span className='bg-black text-white text-xs px-2 py-1 font-medium'>
              NEW
            </span>
          )}
          {discount && (
            <span className='bg-red-600 text-white text-xs px-2 py-1 font-medium'>
              {discount}% OFF
            </span>
          )}
        </div>
      </div>

      <div>
        <h3 className='font-medium text-base mb-1'>{title}</h3>

        <div className='flex items-center gap-2 mb-2'>
          <Rating value={rating} precision={0.5} size='small' readOnly />
          <span className='text-xs text-gray-500'>({reviewCount})</span>
        </div>

        <div className='flex items-center justify-between mb-3'>
          {discount ? (
            <div className='flex items-center gap-2'>
              <span className='font-bold'>${discountedPrice.toFixed(2)}</span>
              <span className='text-gray-500 text-sm line-through'>
                ${price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className='font-bold'>${price.toFixed(2)}</span>
          )}
        </div>

        <div className='group/button'>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            sx={{
              borderRadius: '0',
              padding: '10px 16px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.5px',
              borderColor: '#000',
              color: '#000',
              backgroundColor: 'transparent',
              transition: 'all 0.3s',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
                borderColor: '#000',
              },
            }}
          >
            <span className='flex items-center justify-center w-full'>
              <ShoppingCartIcon sx={{ fontSize: 18, marginRight: '8px' }} />
              ADD TO CART
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
