import Hero from './component/Hero';
import Navbar from './component/navbar';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}
