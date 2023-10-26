import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Main from './main';
import AboutMe from './about_me';
import Skills from './skills';
import Projects from './projects';

//Header와 footer는 투명도를 줘서 페이지 최상단에 띄워놓을 계획

export default function Home() {
  return (
    <>
      <Header />
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
