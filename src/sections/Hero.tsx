import StarsBg from '../../public/assets/stars.png';

import { Button } from '@/components/Button';

export const Hero = () => {
  return (
    <section className='relative pt-14 md:pt-10 lg:pt-3 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_65%,transparent)] lg:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_72.5%,transparent)]'>
      <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
      <div
        className='relative flex items-center h-[556px] md:h-[800px]'
        style={{ backgroundImage: `url(${StarsBg.src})` }}
      >
        <div className='absolute bg-purple-500 w-64 h-64 md:w-96 md:h-96 top-[42.5%] -translate-y-1/2 left-1/2 -translate-x-1/2 border border-white/20 rounded-full bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]'></div>
        <div className='absolute w-[344px] h-[344px] md:w-[580px] md:h-[580px] top-[42.5%] -translate-y-1/2 left-1/2 -translate-x-1/2 border border-white opacity-20 rounded-full'>
          <div className='absolute bg-white w-2 h-2 top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full'></div>
          <div className='absolute bg-white w-2 h-2 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full'></div>
          <div className='absolute w-6 h-6 top-1/2 -translate-y-1/2 left-full -translate-x-1/2 border border-white flex justify-center items-center rounded-full'>
            <div className='bg-white w-2 h-2 rounded-full'></div>
          </div>
        </div>
        <div className='absolute w-[444px] h-[444px] md:w-[780px] md:h-[780px] top-[42.5%] -translate-y-1/2 left-1/2 -translate-x-1/2 border border-dashed border-white/20 rounded-full'></div>
        <div className='absolute w-[544px] h-[544px] md:w-[980px] md:h-[980px] top-[42.5%] -translate-y-1/2 left-1/2 -translate-x-1/2 border border-white opacity-20 rounded-full'>
          <div className='absolute bg-white w-2 h-2 top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rounded-full'></div>
          <div className='absolute bg-white w-2 h-2 top-1/2 -translate-y-1/2 left-full -translate-x-1/2 rounded-full'></div>
        </div>
        <div className='container z-10 -mt-5 md:-mt-28'>
          <h1 className='bg-white text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%__100%_at_top_left,white,white,rgb(74,32,138,0.5))] text-transparent bg-clip-text text-center'>
            AI SEO
          </h1>
          <p className='text-white/70 text-lg md:text-xl max-w-xl mx-auto mt-5 text-center'>
            Elevate your site&apos;s visibility effortlessly with AI, where
            smart technology meets user-friendly SEO tools.
          </p>
          <div className='flex justify-center mt-5'>
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
