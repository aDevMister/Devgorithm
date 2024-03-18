"use client"
// import { PageLayout } from '@/components'
// import { Bio, Hero, KeyLinks, Organization, Publications } from '@/components/sections'
import { getAuthDataFromLocalStorage } from '@/utils/indext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isAsideSticky, setAsideSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authData = getAuthDataFromLocalStorage();
    if (!authData) {
      router.push('/login')
    }
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Adjust the value (e.g., 300) based on your specific layout
  //     const scrollThreshold = 350;

  //     if (window.scrollY > scrollThreshold) {
  //       setAsideSticky(true);
  //     } else {
  //       setAsideSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup the event listener to avoid memory leaks
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
    {/* <PageLayout showNav>
      <main className="w-full max-w-[80rem] mx-auto px-[1rem] sm:pb-10 sm:pt-[115px] pb-5 pt-[95px]">
        <Hero />
        <div className='flex flex-col sm:flex-row my-8 gap-x-[3%]'>
          <div className='w-full sm:w-[67%]'>
            <Bio />
            <Publications />
          </div>
          <aside className={`w-full sm:w-[30%] ${isAsideSticky ? "fixed top-0 right-8" : ""}`}>
            <KeyLinks />
            <Organization />
          </aside>
        </div>
      </main>
    </PageLayout> */}
  <div>
    
  </div>
    </>
  )
}
