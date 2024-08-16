import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Projectssection from "./components/Projectssection";
import Emailsection from "./components/Emailsection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <div className="container mt-24 mx-auto py-4 px-12">
      <Herosection/>
      <AchievementsSection/>
      <AboutSection/>
      <Projectssection/>
      <Emailsection/>
      
      </div>
      <Footer/>
    </main>
  );
}
