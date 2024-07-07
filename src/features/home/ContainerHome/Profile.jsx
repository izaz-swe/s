import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="grid grid-cols-10 py-10  gap-20  ">
      <div className="col-span-4 flex flex-col hover:shadow-purple-500 items-center bg-white p-10 shadow-xl rounded-xl border-indigo-500">
       
       <img src="data:image/jpeg;base64,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" alt="" />
      <h3 className="text-xl font-bold text-blue-700 py-5"> {user?.name}</h3>
      <p className="uppercase font-bold text-blue-700">{user?.role} </p>
      </div>
      <div className="col-span-5 flex flex-col items-start hover:shadow-purple-500 shadow-xl   bg-white p-10  rounded-xl border-indigo-500">
        <h2 className="text-xl text-sky-700" >Name : {user?.name}</h2>
        <p className="text-xl text-blue-700" >Email : {user?.email}</p>
        <p className="text-xl text-blue-700" >Age : 25 Years</p>
        <p className="text-xl text-blue-700">Email : {user?.email}</p>
        <p className="text-xl text-blue-700">Phone : {user?.phone}</p>
        <p className="text-xl text-blue-700">Address : 35 lan sheker para Danmondi 10  </p>

      </div>
    </div>
  );
};

export default Profile;
