import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Technologies from './components/Technologies';
const App = () => {
  return (
    <div className='overflow-x-hidden  text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen
      bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(10,0,20,0.3),rgba(225,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8"></div>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      </div>
  );
};

export default App