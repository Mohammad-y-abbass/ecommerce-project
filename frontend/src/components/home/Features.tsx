import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgent';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

const Features = () => {
  return (
    <section className='py-8 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='flex flex-col items-center text-center'>
            <LocalShippingOutlinedIcon
              sx={{ fontSize: 32, marginBottom: '12px' }}
            />
            <h3 className='text-sm font-medium'>FREE GLOBAL SHIPPING</h3>
            <p className='text-xs text-gray-500 mt-1'>On orders over $500</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <VerifiedOutlinedIcon sx={{ fontSize: 32, marginBottom: '12px' }} />
            <h3 className='text-sm font-medium'>AUTHENTICITY GUARANTEED</h3>
            <p className='text-xs text-gray-500 mt-1'>
              100% authentic products
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <SupportAgentOutlinedIcon
              sx={{ fontSize: 32, marginBottom: '12px' }}
            />
            <h3 className='text-sm font-medium'>24/7 CUSTOMER SUPPORT</h3>
            <p className='text-xs text-gray-500 mt-1'>Dedicated assistance</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <CachedOutlinedIcon sx={{ fontSize: 32, marginBottom: '12px' }} />
            <h3 className='text-sm font-medium'>EASY RETURNS</h3>
            <p className='text-xs text-gray-500 mt-1'>30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
