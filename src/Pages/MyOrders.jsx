import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import moment from 'moment';

const MyOrders = () => {
    const {user}= useContext(AuthContext)
    const myOrders = useLoaderData();

    const [items,setItems] = useState(myOrders);


    const handleDelete=(id)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/purchases/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipments has been deleted.",
                                icon: "success"
                            });

                            // update the loaded coffee state
                            const remainingItems = items.filter(item => item._id !== id);
                            setItems(remainingItems);

                        }
                    })

            }
        });

    }




    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-6 bg-base-200 p-3">
  
 {/* added responsive classes in this table */}
  <div className="w-full ">
    <table className="table-auto w-full border border-gray-200">
      <thead>
        <tr className="">
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            No:
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Photo
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Item Name
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Price
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Food Owner
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Buying Date & Time
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item._id}
            className=""
          >
            <td className="px-2 py-1 text-xs border border-gray-200 text-center">
              {index + 1}
            </td>
            <td className="px-2 py-1 border border-gray-200">
              <img
                src={item.photo}
                alt={item.itemName}
                className="w-8 h-8 rounded-full object-cover mx-auto"
              />
            </td>
            <td className="px-2 py-1 text-xs border text-center border-gray-200 break-words">
              {item.itemName}
            </td>
            <td className="px-2 py-1 text-xs border border-gray-200 text-center">
              ${item.price}
            </td>
            <td className="px-2 py-1 text-xs border text-center border-gray-200 break-words">
              {item.name}
            </td>
            <td className="px-2 py-1 text-xs border text-center border-gray-200 break-words">
              {item.date}
              
            </td>
            <td className="px-2 py-1 text-xs border border-gray-200">
              <div className="flex justify-center">
                <Link >
                  <button  onClick={()=>handleDelete(item._id)} className="btn btn-xxs  bg-red-200 text-[10px]">
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    );
};

export default MyOrders;