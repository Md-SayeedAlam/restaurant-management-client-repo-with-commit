import React, { useContext, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import allFood from "../../public/all food.jpeg";
const Gallery = () => {
  const [open, setOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
const {user} = useContext(AuthContext)

  const images = [
    {
      src: "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=1024x1024&w=is&k=20&c=QPHFTWoscwMSXOEGKoAKOjlCnMGszppFBrqQHdy4EGc=",
      
      description: "Delicious",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
     
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
      
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
     
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
      
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
      
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
    
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
      
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
      
      description: "Mojadar",
    },
    {
      src: "https://media.istockphoto.com/id/2032134580/photo/fast-food-lunch-or-dinner-on-table-at-restaurant-people-eating-for-nutrition-and-wellness.jpg?s=1024x1024&w=is&k=20&c=mX-JVQ5pmtFGF4IjRNjtj8r6J6nYuq4G4qKTX_x6gks=",
      
      description: "Mojadar",
    },
    {
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     
      description: "Mojadar halua ruti",
    },
  ];

  const openLightbox = (image) => {
    // setSelectedImage(image);
    setOpen(true);
  };

  return (
    <>

     <div
            className="hero w-full h-full lg:h-[250px]"
            style={{
              backgroundImage: `url(${allFood})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic font-serif text-amber-400">
                  <i>Foods Gallery</i>
                </h1>
                <p className="mb-5  text-white">Taste it...</p>
              </div>
            </div>
          </div>







    <section className="py-16">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.description}
                className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold">{user?.displayName}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img.src }))}
        
        />
      )}
    </section>
    </>
  );
};

export default Gallery;












