import Divider from '@mui/material/Divider';

import ProductCard from '../product/ProductCard';

const ArrivalSection = () => {
  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center mb-12'>
          <h2 className='text-3xl font-bold mb-3 tracking-tight'>
            NEW ARRIVALS
          </h2>
          <Divider
            sx={{
              width: '40px',
              height: '2px',
              backgroundColor: 'black',
              margin: '0 auto',
            }}
          />
          <p className='text-gray-600 mt-4 text-center max-w-xl'>
            Explore our latest collection of premium products, crafted with
            exceptional attention to detail.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <ProductCard
            title='Italian Leather Weekender'
            price={1295}
            imageUrl='/placeholder.svg?height=400&width=400'
            rating={4.9}
            reviewCount={42}
            isNew={true}
          />
          <ProductCard
            title='Cashmere Overcoat'
            price={2450}
            imageUrl='/placeholder.svg?height=400&width=400'
            rating={4.8}
            reviewCount={36}
            isNew={true}
          />
          <ProductCard
            title='Handcrafted Leather Belt'
            price={395}
            imageUrl='/placeholder.svg?height=400&width=400'
            rating={4.7}
            reviewCount={28}
            isNew={true}
          />
          <ProductCard
            title='Merino Wool Scarf'
            price={245}
            imageUrl='/placeholder.svg?height=400&width=400'
            rating={4.6}
            reviewCount={19}
            isNew={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ArrivalSection;
