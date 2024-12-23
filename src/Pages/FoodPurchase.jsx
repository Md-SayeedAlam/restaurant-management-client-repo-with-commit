import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';

const FoodPurchase = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = e =>{
        e.preventDefault()
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center">Food Purchase</h2>
  
        <form 
        onSubmit={handleSubmit}
        >
          {/* form name and email row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Buyer Name</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="displayName"
                  id=""
                  placeholder="name"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  id=""
                  placeholder="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
        
  
          {/* form name and quantity row */}
          <div className=" md:flex mb-8 ">
            <div className="form-control md:w-1/2 lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="itemName"
                  id=""
                  placeholder="Food Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text"> Quantity</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  id=""
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  

        

  
         

          <div className="form-control  w-full mb-8">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  id=""
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* Current  Date  */}

            
        
            <div className="form-control  w-full mb-8">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="date"
                  id=""
                  placeholder="Date"
                  className="input input-bordered w-full"
                  
                  value={new Date().toLocaleString()} readOnly
                />
              </label>
            </div>
  
      
  
  
          <input
            type="submit"
            value="Purchase"
            className="btn btn-block btn-neutral"
          />
        </form>
      </div>
    );
};

export default FoodPurchase;