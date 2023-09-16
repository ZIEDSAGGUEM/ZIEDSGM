import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import GitHub from "../assets/Github.png";
import Linkedin from "../assets/linkedin-icon.png";
import Twitter from "../assets/twitter-icon.png";
import { Link } from "react-router-dom";
import "./Animate-Title.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkiwu2d",
        "template_29qxk9m",
        form.current,
        "o4YF2CaFE2myEiwqx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <SectionTitle id="works">Contact ME</SectionTitle>
      <form
        className="max-w-lg mx-auto py-3  pb-20    "
        id="Contact"
        ref={form}
        onSubmit={sendEmail}
      >
        <div
          className="grid gap-6 mb-6 md:grid-cols-2 relative z-50  "
          data-aos="zoom"
        >
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="bg-gray-50 border relative z-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="bg-gray-50 border relative z-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="mb-6 relative z-50" data-aos="zoom">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border relative z-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6 relative z-50" data-aos="zoom">
          <label
            htmlFor="message"
            className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full relative z-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          className="btn px-5 btn-success   relative z-50 "
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          SEND
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-blue-500">
            <h1 className="text-center text-black font-bold p-5 text-4xl">
              Thank You For Your Feedback
            </h1>

            <div className="modal-action">
              {/* No need for an inner form, you can handle the modal close here */}
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>

        <div className="mt-10  flex flex-row items-center justify-center   ">
          <Link
            to="https://github.com/ZIEDSAGGUEM"
            id="x"
            className=" mx-5 relative z-50  "
          >
            <img
              src={GitHub}
              style={{ height: "50px" }}
              className="mx-auto  "
            />
          </Link>
          <Link
            to="https://twitter.com/ZIED_SAGUEM"
            id="y"
            className="relative z-50   "
          >
            <img
              src={Twitter}
              style={{ height: "50px" }}
              className="mx-auto  "
            />
          </Link>
          <Link to="" id="z" className=" mx-5 relative z-50  ">
            <img
              src={Linkedin}
              style={{ height: "50px" }}
              className="mx-auto  "
            />
          </Link>
        </div>
      </form>
    </>
  );
};

export default Contact;
