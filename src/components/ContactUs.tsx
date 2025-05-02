import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-around ">
        <div className="min-h-screen flex items-center justify-around bg-gray-50 relative overflow-hidden w-full">
          <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rotate-45 rounded-md opacity-40" />
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300 rotate-45 rounded-md opacity-30" />
          <div className="absolute bottom-16 left-1/2 w-8 h-8 bg-blue-400 rounded-full opacity-50" />
          <div className="text-center mt-10 mr-[70px]">
            <h1>Have a question?</h1>
            <form action="" className="max-w-md mx-auto space-y-4">
              <div className="mt-4">
                <label className="block mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  className=" border border-black rounded px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  className=" border border-black rounded px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className=" border border-black rounded px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea className=" border border-black rounded px-3 py-2 outline-none"></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue-400 text-white px-5 py-3 rounded-full  hover:bg-blue-600"
                >
                  Send msg
                </button>
              </div>
            </form>
          </div>
          <div className=" bg-blue-400    p-6 max-h-max rounded-lg">
            <h1 className="font-semibold text-xl p-1 ml-4">Get in Touch</h1>
            <div className=" justify-center ">
              <div>
                <p className="text-white text-xs ml-3 p-2">
                  We love to hear from you.Our friendly team is always here to
                  chat
                </p>
                <div className="p-5">
                  <h1 className="font-semibold">
                    <FontAwesomeIcon icon={faHouse} />
                    Address
                  </h1>
                  <p className="ml-2">123 Main Street, City, Country</p>
                </div>
                <div className="p-4">
                  <h1 className="font-semibold">
                    <FontAwesomeIcon icon={faPhone} />
                    Phone
                  </h1>
                  <p className="ml-2">+91 1233344566</p>
                </div>
                <div className="p-4">
                  <h1 className="font-semibold">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                  </h1>
                  <p className="ml-2">fab4@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
