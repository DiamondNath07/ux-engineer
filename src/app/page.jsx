import CardStacks from './component/cardStacks';
import Hero from './component/Hero';
import Navbar from './component/navbar';
import WorkExperience from './component/works/WorkExperience';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <CardStacks />
      <WorkExperience />
    </div>
  );
  x;
}
