import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BookingCard from '../components/BookingCard';
import HorizontalScroll from '@/components/HorizontalScroll';
import Location from '@/components/Location';
import RoomsBeds from '@/components/RoomsBeds';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className='main-section'>
        <div>
          <AboutSection />
          <HorizontalScroll/>
          <Location/>
          <RoomsBeds/>
        </div>
        <BookingCard />
      </div>
    </>
  );
}
