import Image from 'next/image';

import Button from '@mui/material/Button';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = () => {
  return (
    <section className='bg-black text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 xl:px-24'>
          <span className='inline-block px-3 py-1 bg-white/10 text-white rounded-sm text-xs font-medium tracking-wider mb-6'>
            FALL/WINTER 2025
          </span>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight'>
            The Art of <br />
            Black Elegance
          </h1>
          <p className='text-gray-300 text-lg max-w-md mb-8 leading-relaxed'>
            Discover our curated collection of premium essentials crafted with
            exceptional materials and timeless design.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button
              variant='contained'
              size='large'
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: '0',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '1px',
                backgroundColor: 'white',
                color: 'black',
              }}
            >
              SHOP COLLECTION
            </Button>
            <Button
              variant='outlined'
              color='primary'
              size='large'
              sx={{
                borderRadius: '0',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '1px',
                borderColor: 'rgba(255,255,255,0.5)',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                },
              }}
            >
              DISCOVER MORE
            </Button>
          </div>
        </div>
        <div className='relative h-[500px] lg:h-auto'>
          <Image
            src='https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Luxury fashion model'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
