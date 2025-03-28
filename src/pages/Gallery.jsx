import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Gallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://backend-for-portfolio-jauk.onrender.com/api/v1/softwareapplication/getall",
          { withCredentials: true }
        );
        console.log(response.data.softwareApplications,'response')
        setProjects(response.data.softwareApplications);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch projects");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-[100vh] p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
        
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <img
                src={
                  project.svg?.url || "/avatarHolder.jpg"
                }
                alt={project.name}
                className="w-full h-full h-48 object-cover"
              />
             
            </div>
      
        ))}
      </div> 
    </div>
  );
};

export default Gallery;