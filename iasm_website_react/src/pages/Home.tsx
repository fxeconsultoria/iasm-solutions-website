import { Link } from 'react-router-dom';

// Componentes
import HeroSection from '../components/home/HeroSection';
import ProblemSolution from '../components/home/ProblemSolution';
import ServicesOverview from '../components/home/ServicesOverview';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import RecentBlog from '../components/home/RecentBlog';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ProblemSolution />
      <ServicesOverview />
      <Statistics />
      <Testimonials />
      <RecentBlog />
      <CallToAction />
    </div>
  );
};

export default Home;
