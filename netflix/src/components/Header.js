import axios from "axios";
import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux"
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null))
      navigate("/")
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to Logout");
    }
  }

  const toggleHandler = () => {
    dispatch(setToggle())
  }

  return (
    <header className="flex absolute z-10 w-[100vw] items-center justify-between bg-gradient-to-b from-black px-4">

      <img
        className="w-[180px] p-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png?20190206123158"
        alt="netflix-logo"
      />

      {
        user && (
          <div className="flex items-center  p-4 text-gray-200">
            <FaHandPointDown className="text-xl mr-1" />

            <h1 className="text-2xl font-semibold mr-6">
              {user?.fullName}
            </h1>

            <div className="flex gap-4">
              <button onClick={logoutHandler} className="rounded-full bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800">
                Logout
              </button>

              <button onClick={toggleHandler} className="rounded-full bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800">
                {toggle ? "Home" : "Search Movie"}
              </button>
            </div>
          </div>
        )
      }

    </header>
  );
};

export default Header;
