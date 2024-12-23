import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';


const FoodCardDetails = () => {
  
    const foods=useLoaderData()
    const {itemName,quantity,category,photo,price,origin,description ,name} = foods;
    return (
        <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-[800px] shadow-xl mt-10 mb-10 justify-center items-center">
          <figure>
            <img
              className="rounded-md w-[400px] h-[250px]"
              src={photo}
              alt="image"
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl">{itemName}</h2>
            <p className="font-semibold text-gray-400">
              <span className="font-semibold text-gray-600">Item Name</span>:{" "}
              {itemName}
            </p>
            <p className="font-medium text-gray-400">
              <span className="font-semibold text-gray-600">Category Name</span> :{" "}
              {category}
            </p>
            <p className="font-medium text-gray-400">
              <span className="font-semibold text-gray-600">Price: </span>
              ${price} 
            </p>
            
            <p className="font-medium text-gray-400">
              <span className="font-semibold text-gray-600">
                User Name: :{" "}
              </span>{" "}
              {name}
            </p>
            <p className="text-gray-400"> <span className="font-semibold text-gray-600">Description: </span>{" "} {description}</p>

           
            <p className="font-medium text-gray-400">
            <span className="font-semibold text-gray-600">Quantity: </span>{" "}
              {quantity} pcs
            </p>
            

            <p className="font-medium text-gray-400">
            <span className="font-semibold text-gray-600">Origin: </span>{" "}
              {origin}
            </p>
          </div>
        </div>
  
        
  
      </div>
    );
};

export default FoodCardDetails;