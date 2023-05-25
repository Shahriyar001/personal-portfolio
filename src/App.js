import './App.css';
import AboutMe from './components/about-me/AboutMe';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

function App() {
  return (
    <div className='bg-[#282C33]'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Work></Work>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
