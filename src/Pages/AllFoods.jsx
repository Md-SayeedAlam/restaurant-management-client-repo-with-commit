import React, { useEffect, useState } from "react";
import allFood from "../../public/all food.jpeg";
import FoodCard from "../Components/FoodCard/FoodCard";
// import { useLoaderData } from 'react-router-dom';
const AllFoods = () => {
   useEffect(() => {
              document.title = "All Foods || Nova Restaurant";
            }, []);
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [sort,setSort] = useState('')
 

  

  useEffect(() => {
    const foodsItem = async () => {
      try {
        const response = await fetch(
          `https://restaurent-management-server-one.vercel.app/foods?search=${search}&sort=${sort}`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }
        );
        // if (!response.ok) {
        //   throw new Error("Failed to fetch foods");
        // }
        const data = await response.json();
        setFoods(data);
       
      } catch (error) {
        // console.log("Error fetching foods:", error);
      }
    };

    foodsItem();
  }, [search,sort]);


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
              <i>Our Delicious Food</i>
            </h1>
            <p className="mb-5  text-white">Taste it...</p>
          </div>
        </div>
      </div>

     <div className="flex flex-col lg:flex-row gap-5  mt-10 mb-10 mx-8 lg:mx-10  ">
     <div className="w-full lg:w-1/2">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search Here By Foods Name"
          />
       
          <button  className="btn btn-xs bg-amber-400">Search</button>
        </label>
      </div>


        <div className="w-full lg:w-1/2">
          <select
          onChange={e=>setSort(e.target.value)}
            name="category"
             id="category" 
             className="border p-[11px] rounded-md pr-[148px] lg:pr-[400px]"
            >
            <option value="">Sort By Price</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
     </div>




      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
        {foods.map((food, idx) => (
          <FoodCard key={idx} food={food}></FoodCard>
        ))}
      </div>
    </>
  );
};

export default AllFoods;
