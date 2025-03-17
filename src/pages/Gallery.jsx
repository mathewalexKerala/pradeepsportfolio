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
          "http://localhost:8000/api/v1/project/get-all",
          { withCredentials: true }
        );
        console.log(response)
        setProjects(response.data.projects);
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
                  project.projectBanner?.url || "/avatarHolder.jpg"
                }
                alt={project.title}
                className="w-full h-48 object-cover"
              />
             
            </div>
      
        ))}
      </div> 
    </div>
  );
};

export default Gallery;