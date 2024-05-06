



import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";


const Order = () => {
  const [component, setComponent] = useState([]);
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    
  }, []);
 
 
  return (
    <div className="flex flex-row">
      
      <div className=" container py-10 mx-auto">
        <table className="table w-full mx-auto bg-lime-200">
          <thead>
            <tr>
              <th></th>
              <th>Event</th>
              <th>Customer info</th>
              <th>Price</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="mx-auto">
            {component?.map((c, i) => (
              <tr key={i} className="text-center p-2">
                <th>
                  <label>
                  { !(c?.price && c?.paid) && (<button
                   
                    className="btn btn-ghost "
                  >
                  <MdDeleteForever className="text-2xl"/>
                  </button>)}
                  </label>
                </th>
                <td>{c.event}</td>
                <td className="flex flex-col">
                  <p>{c.name}</p>
                  <p>{c.email}</p>
                </td>
                <td>{c?.price}</td>
                <td className="flex flex-col">
                  <p> {c?.location}</p>
                  <p> {c?.contact}</p>
                </td>
                <td className="text-center">
                  <button className="btn ">
                    {c?.price && !c?.paid && (
                      <Link to={`/payment/${c?._id}`}>
                        <button className="btn  btn-sm">Pay</button>
                      </Link>
                    )}

                    {c?.price && c?.paid && (
                      <span className="text-green-600 text-xl">Paid</span>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
