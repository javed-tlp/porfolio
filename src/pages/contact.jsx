import React from "react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [value, setValue] = useState({ name: "", email: "", message: "" });
  const handler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submit = () => {
    axios
      .post("http://localhost:3001/send", value)
      .then((res) => toast(res.data.message, { type: "success" }))
      .catch((e) => toast("mail not sent", { type: "error" }));
  };
  return (
    <>
      <div className="bg-transparent m-2 p-2 sm:h-3/4 sm:w-3/5 sm:mt-4 grid gap-8 grid-cols-1 md:grid-cols-2 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div className="sm:mt-20">
            <h2 className=" text-lg sm:text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className="text-black mt-8">can connect on social hanldes</div>
            <div className="flex mt-2 gap-2">
              <span className="text-4xl">
                <AiFillGithub />
              </span>
              <span className="text-4xl">
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-1 p-1 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              onChange={handler}
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-1 p-1 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              onChange={handler}
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-1 p-1 rounded-lg focus:outline-none focus:shadow-outline"
              name="message"
              onChange={handler}
            ></textarea>
          </div>
          <div className="mt-2">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              onClick={submit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
