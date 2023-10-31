'use client';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Main from './main';
import AboutMe from './about_me';
import Skills from './skills';
import Projects from './projects';
import './page.css';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showToTheTopButton, setShowToTheTopButton] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | undefined;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 10) {
          setShowToTheTopButton(true);
        } else {
          setShowToTheTopButton(false);
        }
      }, 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>
      <Header />
      <button className={showToTheTopButton ? 'toTheTopButton' : 'inVisable'}>
        <Image
          onClick={handleToTheTop}
          src="/ToTheTop.png"
          alt="ToTheTop"
          width={48}
          height={48}
        />
      </button>
      <div>
        <Main />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
