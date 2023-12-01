"use client";
import { ECOMMERCE_ROLE, ECOMMERCE_TOKEN } from "@/constants";
import { useAppDispatch } from "@/redux/hooks";
import { setIsAuthenticated, setRole } from "@/redux/slice/authSlice";
import request from "@/server";
import { toast } from "react-toastify";

import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  interface LoginType {
    target: {
      name: string;
      value: string;
    };
  }
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: LoginType) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        data: { accesstoken, user },
      } = await request.post(`auth/login`, values);
      setCookie(ECOMMERCE_TOKEN, accesstoken);
      setCookie(ECOMMERCE_ROLE, user.role);
      router.push("/admin");
      dispatch(setIsAuthenticated(true));
      dispatch(setRole(user.role));
    } catch (er) {
      toast.error("server error: ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="text-gray-600 body-font mt-6 border-b-2">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 ">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Royahtdan o`tgan bolsangiz bosh o`rinlarni toldirib kiring
          </h1>
          <p className="leading-relaxed mt-4">
            Agarda royhatdan otmagan bolsangiz iltimos{" "}
            <Link className="text-blue-400" href="/register">
              Bu yerga{" "}
            </Link>
            bosin va royhatdan oting
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {loading ? "Loading . . ." : "Submit"}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven`t heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
