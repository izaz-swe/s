import { MdDeleteForever } from "react-icons/md";

const DataTableShow = ({ component }) => {
  return (
    <table className=" table gap-5 w-full container mx-auto ">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th></th>
          <th>Name</th>
          <th>Weight</th>
          <th>Total Price</th>
          <th>Address</th>
          <th>Payment</th>
        </tr>
      </thead>
      <tbody className=" py-5">
        {component?.map((c, i) => (
          <tr key={i} className="bg-white text-center ">
            <th
            
              className="px-6 py-4 font-medium "
            >
              
                {  
                  <button className="btn btn-ghost ">
                    <MdDeleteForever className="text-2xl" />
                  </button>
                }
           
            </th>
            <td className="px-6 py-4">{c?.offerDetails?.offerName}</td>
            <td className="px-6 py-4">
              <p>{c.offerDetails?.weight}</p>
              
            </td>
            <td className="px-6 py-4">{c?.totalPrice}</td>
            <td className="px-6 py-4">
              <p>{c?.address} </p>
            </td>
            <td className="px-6 py-4">
              <button className="btn ">
                {c?.status == "pending" ? (
                  <button className="btn  btn-sm">Pay</button>
                ) : (
                  <span className="text-green-600 text-xl">Paid</span>
                )}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTableShow;
{
  /* <tr key={i} className="text-center py-5  ">
              <th>
                
              </th>
              <td></td>
              <td className="flex flex-col">
                
              </td>
              <td></td>
              <td className="flex flex-col">
              
              </td>
              <td className="text-center">
                
              </td>
            </tr> */
}
