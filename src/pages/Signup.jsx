import { Button, Radio } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../state/reducers/registerSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
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

    if (role) {
      const userData = {
        name,
        email,
        password,
        phone,
        role,
      };
      dispatch(createUser(userData));
    } else {
      toast("selected role");
    }
  };

  const { success } = useSelector((state) => state.reg);
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [navigate, success]);

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
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={handleEmailChange}
                required
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                required
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="phone"
                placeholder="Phone"
                onChange={handlePhoneChange}
                required
              />
              <div className="flex gap-2   items-center text-black">
                <h3 className="text-xl">Role:</h3>
                <Radio
                  name="type"
                  value="farmer"
                  label="farmer"
                  onChange={handleRoleChange}
                  checked={role === "farmer"}
                />
                Farmer
                <Radio
                  name="type"
                  value="buyer"
                  label="buyer"
                  onChange={handleRoleChange}
                  checked={role === "buyer"}
                />{" "}
                Buyer
              </div>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the Terms of Service and Privacy
                Policy
              </div>
              <button
                type="submit"
                className="btn w-full text-center py-3 border-2 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            <div className="text-grey-dark mt-6 text-center">
              Already have an account ?
              <Button>
                <Link to="/login">Log in</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
