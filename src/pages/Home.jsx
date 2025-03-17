import React from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import Footer from "./miniComponents/Footer";
import About from "./miniComponents/About";
import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // <div className="gallery text-tubeLight-effect text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
    //     Gallery
    //   </div>
    <>
   <nav className="text-tubeLight-effect text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px] ml-auto mr-4 mt-3 w-fit">
    <Link to={"/gallery"}>
    <button className="px-6 py-3 sm:px-8 sm:py-4 w-full max-w-[1050px] flex justify-center items-center gap-3 border border-tubeLight-effect 
    
    text-center text-tubeLight-effect font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none  focus:ring-opacity-50">
    Gallery
  </button>
    </Link>

</nav>

    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
       
      <Hero />
      {/* <Timeline /> */}
      <About />
      <Skills />
      {/* <Portfolio /> */}
       {/* <MyApps />  */}
      <Contact />
      
    </article>
    </>
  );
};

export default Home;
