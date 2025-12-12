import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MembersSection from "./components/MembersSection";
import ActivitiesSection from "./components/ActivitiesSection";
import EventsSection from "./components/EventsSection";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import TimelineSection from "./components/TimelineSection";
// import QuoteSection from "./components/QuoteSection";
import AchievementsSection from "./components/AchievementsSection";
import SignatureSection from "./components/SignatureSection";
export default function App() {
  return (
    <div className="font-sans bg-slate-50">
      <Navbar />
      <Hero />
      <MembersSection />
      <ActivitiesSection />
      <TimelineSection />
      <SignatureSection />
      {/* <QuoteSection /> */}
      <AchievementsSection />
       <EventsSection />
       <StatsSection/>  
       <ContactSection/>
       <Footer/>
    </div>
  );
}
