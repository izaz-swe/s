import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { api } from "../../configs/variable";
import TrackingPage from "../../features/home/Tracking/TrackingPage";
import { Link } from "react-router-dom";

const DataTableShow = ({ component }) => {
  console.log(component);
  const { token } = useSelector((state) => state.user.user);
  const handlePayment = (orderId) => {
    fetch(`${api}/order/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify({ orderId }),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.data);
      });
  };
  return (
    <table className=" table gap-5 w-full container mx-auto ">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th></th>
          <th>Name</th>
          <th>Weight</th>
          <th>Total Price</th>
          <th>Payment</th>
          <th>Track</th>
        </tr>
      </thead>
      <tbody className=" py-5">
        {component?.map((c, i) => (
          <tr key={i} className="bg-white text-center ">
            <th className="px-6 py-4 font-medium ">
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
              {c?.status == "pending" ? (
                <button
                  onClick={() => handlePayment(c?.orderId)}
                  className="btn text-red-500 border py-2 text-xl hover:bg-slate-800 rounded-2xl w-1/2 border-fuchsia-300 btn-sm"
                >
                  Pay
                </button>
              ) : (
                <span className="text-green-600 text-xl">Paid</span>
              )}
            </td>
            <td className="px-6 py-4">
              <button className="btn  border py-2 text-xl hover:bg-blue-600 rounded-2xl w-1/2 border-fuchsia-300 btn-sm">
                {" "}
                <Link
                  to={`/track/${c.orderId}`}
                  state={{ component: c }}
                >
                  Track
                </Link>{" "}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTableShow;
