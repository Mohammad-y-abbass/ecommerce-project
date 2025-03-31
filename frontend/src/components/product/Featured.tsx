import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FeaturedCollection() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <div className='lg:col-span-2 relative aspect-[16/9] md:aspect-auto md:h-full bg-black'>
        <Image
          src='/placeholder.svg?height=600&width=1000'
          alt='Black Collection Feature'
          fill
          className='object-cover opacity-90'
        />
        <div className='absolute inset-0 flex flex-col justify-end p-8 md:p-12'>
          <h3 className='text-white text-2xl md:text-3xl font-bold mb-4'>
            The Essential Black Suit
          </h3>
          <p className='text-white/80 mb-6 max-w-md'>
            Crafted from the finest Italian wool with a modern silhouette and
            impeccable tailoring.
          </p>
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: '0',
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '1px',
              alignSelf: 'flex-start',
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            DISCOVER
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='relative aspect-square bg-gray-100'>
          <Image
            src='/placeholder.svg?height=500&width=500'
            alt='Black Collection Item'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent'>
            <h3 className='text-white text-xl font-bold mb-2'>
              Black Cashmere Coat
            </h3>
            <Link
              href='#'
              className='text-white/90 text-sm flex items-center gap-1 hover:text-white'
            >
              Shop Now <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </Link>
          </div>
        </div>

        <div className='relative aspect-square bg-gray-100'>
          <Image
            src='/placeholder.svg?height=500&width=500'
            alt='Black Collection Item'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent'>
            <h3 className='text-white text-xl font-bold mb-2'>
              Black Leather Accessories
            </h3>
            <Link
              href='#'
              className='text-white/90 text-sm flex items-center gap-1 hover:text-white'
            >
              Shop Now <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
