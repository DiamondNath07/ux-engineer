import CardStacks from './component/cardStacks';
import Fags from './component/FAQs/Fags';
import Footer from './component/footer/Footer';
import Hero from './component/Hero';
import Navbar from './component/navbar';
import Statistics from './component/statistics/Statistics';
import WorkExperience from './component/works/WorkExperience';

export default function Home() {
  return (
    <div className="bg-white scrollbar-hide ">
      <Navbar />
      <Hero />
      <CardStacks />
      <WorkExperience />
      <Fags />
      <Statistics />
      <Footer />
    </div>
  );
  x;
}
