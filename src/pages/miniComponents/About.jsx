import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
const About = () => {
  const [aboutData, setAboutData] = useState({});
const [imageUrl, setImageUrl] = useState('');
  
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://backend-for-portfolio-jauk.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      
      setImageUrl(data.user.avatar.url)
      localStorage.setItem('avatarUrl',JSON.stringify(data.user.avatar.url))
      setAboutData(data.user);
    };
    getMyProfile();
  }, []);
 
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={JSON.parse(localStorage.getItem('avatarUrl'))} decoding="async"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
            {aboutData.aboutMe}
            </p>
            <p>
            A senior PMP certified supply chain professional with 30+ years of experience across various industries.
            
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
        Executed Major Telecom projects while holding senior positions with Top Telecom MNCs.
        </p>
      </div>
    </div>
  );
};

export default About;
