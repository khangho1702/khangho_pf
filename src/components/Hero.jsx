import { FRONT_PAGE_DESC, FRONT_PAGE_NAME, OWNER_PHOTO } from '../root.link';

const Hero = () => {
  return (
      <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:flex-row gap-x-8 md:items-end'>
          <picture className='w-full md:w-3/12 shadow-lg'>
              <img src='./images/kh_ava.png' alt='A photo of Khang Ho'/>
          </picture>
          <div className='max-w-md mb-auto space-y-5'>
              <h1 className='text-5xl font-bold md:text-7xl'>{FRONT_PAGE_NAME}</h1>
              <p className='tracking-wide leading-relaxed'>
                  {FRONT_PAGE_DESC}{' '}
          </p>
        </div>
      </section>
  );
};

export default Hero;
