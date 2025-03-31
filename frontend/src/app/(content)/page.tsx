import Image from 'next/image';
import Link from 'next/link';

import { Button, Divider } from '@mui/material';

import ProductCard from '@/components/product/ProductCard';
import CategoryCard from '@/components/product/CategoryCard';
import TestimonialCard from '@/components/product/TestimonialCard';
import NewsletterForm from '@/components/product/Newsletter';
import FeaturedCollection from '@/components/product/Featured';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/home/Features';
import ArrivalSection from '@/components/home/ArrivalSection';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <main className='flex-grow'>
        <HeroSection />
        <Features />
        <ArrivalSection />

        {/* Featured Collection */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center mb-12'>
              <h2 className='text-3xl font-bold mb-3 tracking-tight'>
                THE BLACK COLLECTION
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
                Our signature collection of timeless black essentials, designed
                for the modern connoisseur.
              </p>
            </div>

            <FeaturedCollection />
          </div>
        </section>

        {/* Categories Grid */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center mb-12'>
              <h2 className='text-3xl font-bold mb-3 tracking-tight'>
                SHOP BY CATEGORY
              </h2>
              <Divider
                sx={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'black',
                  margin: '0 auto',
                }}
              />
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
              <CategoryCard
                title='OUTERWEAR'
                imageUrl='/placeholder.svg?height=500&width=500'
                itemCount={42}
              />
              <CategoryCard
                title='ACCESSORIES'
                imageUrl='/placeholder.svg?height=500&width=500'
                itemCount={68}
              />
              <CategoryCard
                title='FOOTWEAR'
                imageUrl='/placeholder.svg?height=500&width=500'
                itemCount={36}
              />
              <CategoryCard
                title='BAGS'
                imageUrl='/placeholder.svg?height=500&width=500'
                itemCount={24}
              />
            </div>
          </div>
        </section>

        {/* Full-width Promotion */}
        <section className='bg-black text-white py-24'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 tracking-tight'>
              NOIR MEMBERSHIP
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto mb-8 text-lg'>
              Join our exclusive membership program and enjoy premium benefits,
              including early access to new collections, limited editions, and
              personalized styling services.
            </p>
            <Button
              variant='contained'
              color='primary'
              size='large'
              sx={{
                borderRadius: '0',
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '1px',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              BECOME A MEMBER
            </Button>
          </div>
        </section>

        {/* Bestsellers */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center mb-12'>
              <h2 className='text-3xl font-bold mb-3 tracking-tight'>
                BESTSELLERS
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
                Our most coveted pieces, selected for their exceptional quality
                and timeless appeal.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              <ProductCard
                title='Signature Black Blazer'
                price={1895}
                imageUrl='/placeholder.svg?height=400&width=400'
                rating={5.0}
                reviewCount={124}
                discount={15}
              />
              <ProductCard
                title='Calfskin Leather Boots'
                price={1250}
                imageUrl='/placeholder.svg?height=400&width=400'
                rating={4.9}
                reviewCount={87}
              />
              <ProductCard
                title='Merino Wool Sweater'
                price={495}
                imageUrl='/placeholder.svg?height=400&width=400'
                rating={4.8}
                reviewCount={56}
                discount={10}
              />
              <ProductCard
                title='Italian Silk Tie'
                price={195}
                imageUrl='/placeholder.svg?height=400&width=400'
                rating={4.7}
                reviewCount={42}
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className='py-16 md:py-24 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center mb-12'>
              <h2 className='text-3xl font-bold mb-3 tracking-tight'>
                CLIENT TESTIMONIALS
              </h2>
              <Divider
                sx={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'black',
                  margin: '0 auto',
                }}
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <TestimonialCard
                name='Alexander Bennett'
                role='CEO, Bennett Enterprises'
                imageUrl='/placeholder.svg?height=100&width=100'
                rating={5}
                testimonial="The quality of NOIR's products is unmatched. Every piece I've purchased has become an essential part of my wardrobe. Their attention to detail and commitment to excellence is evident in everything they create."
              />
              <TestimonialCard
                name='Victoria Chen'
                role='Creative Director'
                imageUrl='/placeholder.svg?height=100&width=100'
                rating={5}
                testimonial="As someone who values craftsmanship and design, I've found NOIR to consistently exceed my expectations. Their pieces are timeless, versatile, and made to last. The customer experience is equally exceptional."
              />
              <TestimonialCard
                name='Jonathan Harrington'
                role='Art Collector'
                imageUrl='/placeholder.svg?height=100&width=100'
                rating={5}
                testimonial='NOIR represents the perfect balance of luxury and understated elegance. Their products speak for themselves - impeccable quality, sophisticated design, and a level of service that makes every purchase a pleasure.'
              />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className='py-16 md:py-24 bg-black text-white'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl font-bold mb-3 tracking-tight'>
                JOIN OUR COMMUNITY
              </h2>
              <Divider
                sx={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'white',
                  margin: '0 auto',
                }}
              />
              <p className='text-gray-300 my-6 text-lg'>
                Subscribe to receive early access to new collections, exclusive
                offers, and curated content tailored to your preferences.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center mb-12'>
              <h2 className='text-3xl font-bold mb-3 tracking-tight'>
                FOLLOW US @NOIR
              </h2>
              <Divider
                sx={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'black',
                  margin: '0 auto',
                }}
              />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className='relative aspect-square'>
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Instagram post ${item}`}
                    fill
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-black text-white pt-16 pb-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            <div>
              <h3 className='text-xl font-bold mb-6 tracking-tight'>NOIR</h3>
              <p className='text-gray-400 mb-6 leading-relaxed'>
                Curating the finest luxury essentials for the discerning
                individual. Quality, craftsmanship, and timeless design define
                our collection.
              </p>
              <div className='flex gap-6'>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <span className='sr-only'>Facebook</span>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <span className='sr-only'>Instagram</span>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <span className='sr-only'>Twitter</span>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <span className='sr-only'>Pinterest</span>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      d='M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-6 tracking-tight'>
                SHOP
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Bestsellers
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    The Black Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-6 tracking-tight'>
                CUSTOMER SERVICE
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Order Tracking
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-6 tracking-tight'>
                ABOUT NOIR
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Craftsmanship
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm mb-4 md:mb-0'>
              &copy; {new Date().getFullYear()} NOIR. All rights reserved.
            </p>
            <div className='flex gap-4'>
              <img
                src='/placeholder.svg?height=30&width=50'
                alt='Visa'
                className='h-6'
              />
              <img
                src='/placeholder.svg?height=30&width=50'
                alt='Mastercard'
                className='h-6'
              />
              <img
                src='/placeholder.svg?height=30&width=50'
                alt='American Express'
                className='h-6'
              />
              <img
                src='/placeholder.svg?height=30&width=50'
                alt='PayPal'
                className='h-6'
              />
              <img
                src='/placeholder.svg?height=30&width=50'
                alt='Apple Pay'
                className='h-6'
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
