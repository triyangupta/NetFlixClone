import React, { useState } from 'react'
import Header from './Header'
import { API_END_POINT } from '../utils/constant'
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setLoading, setUser } from '../redux/userSlice'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading=useSelector(store=>store.app.isLoading)

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }

    const getInputData = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true))
        if (isLogin) {
            //login
            const user = { email, password }

            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(setUser(res.data.user));
                    navigate("/browse");

                }

            } catch (error) {
                toast.error(error.response?.data?.message || "Login failed");
            } finally{
                dispatch(setLoading(false));
            }

        } else {
            //register
            dispatch(setLoading(true))
            const user = { fullName, email, password }
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                });
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                setIsLogin(true)
            } catch (error) {
                toast.error(error.response?.data?.message || "Something went wrong");
            } finally{
                dispatch(setLoading(false))
            }
        }
        setFullName("");
        setEmail("");
        setPassword("");
    }
    return (
        <div className='flex relative h-screen w-screen' >
            <Header />

            <div className='flex items-center justify-center'>

                <img className="absolute top-0 left-0 h-full w-full object-cover opacity-80" src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg' alt='bg-image' />

                <form onSubmit={getInputData} className='flex flex-col absolute max-w-md rounded-2xl p-10 mx-auto left-0 right-0 items-center justify-center bg-black/70 shadow-2xl backdrop-blur-md '>

                    <h1 className='text-3xl font-bold text-white mb-6 text-center'>{isLogin ? "Login" : "Sign up"}</h1>

                    <div className='flex flex-col gap-4'>
                        {
                            !isLogin && <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-80 font-semibold  rounded-lg bg-white p-3 text-black outline-none focus:ring-2 focus:ring-red-500"
                                type="text"
                                placeholder="Full Name"
                            />

                        }
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-80 font-semibold rounded-lg bg-white p-3 text-black outline-none focus:ring-2 focus:ring-red-500"
                            type="email"
                            placeholder="E-mail"
                        />

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-80 font-semibold rounded-lg bg-white p-3 text-black outline-none focus:ring-2 focus:ring-red-500"
                            type="password"
                            placeholder="Password"
                        />

                        <button className="mt-2 w-full rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700 transition">
                           {`${isLoading ? "Loading...":(isLogin? "Login" : "Sign up")}`} 

                        </button>

                        <p className="text-center text-gray-300 text-sm mt-2">
                            {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
                            <span className="cursor-pointer text-red-400 hover:underline"
                                onClick={loginHandler}
                            >
                                {isLogin ? "Sign up" : "Login"}
                            </span>

                        </p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
