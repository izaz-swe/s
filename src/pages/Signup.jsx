import { Radio } from "@mui/material";
import { useState } from "react";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted:", { email, name, phone, password,role });
  };

  return (
    <section className="bg-white">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                onChange={handleNameChange}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={handleEmailChange}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="phone"
                placeholder="Phone"
                onChange={handlePhoneChange}
              />
              <div className="flex gap-2   items-center text-black"><h3 className="text-xl">Role:</h3>
                <Radio 
                  name="type" 
                  value="Farmer" 
                  label="Farmer" 
                  onChange={handleRoleChange} 
                  checked={role === 'Farmer'} 
                />Farmer
                <Radio 
                  name="type" 
                  value="Buyer" 
                  label="Buyer" 
                  onChange={handleRoleChange} 
                  checked={role === 'Buyer'} 
                /> Buyer
                
              </div>
              <button
                type="submit"
                className="btn w-full text-center py-3 border-2 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
              >
                Create Account
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline text-black border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
