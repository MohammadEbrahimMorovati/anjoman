import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MembersSection from "./components/MembersSection";
import ActivitiesSection from "./components/ActivitiesSection";
import EventsSection from "./components/EventsSection";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="font-sans bg-slate-50">
      <Navbar />
      <Hero />
      <MembersSection />
      <ActivitiesSection />
       <EventsSection />
       <StatsSection/>  
       <ContactSection/>
       <Footer/>
    </div>
  );
}
